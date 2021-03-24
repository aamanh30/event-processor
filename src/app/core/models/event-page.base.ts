import { getEventTimestamp } from './../../features/shared/config/shared';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventProcessService } from './../../features/shared/services/event-process/event-process.service';
import { ClassService } from './../../features/shared/services/class/class.service';
import { DOMEventTypes, EventType } from './../enums/event-type.enum';
import { CoursePointEvent } from './coursepoint-event.model';

export class EventPageBase {
    eventId: string;
    pageData: CoursePointEvent;
    eventTypes = DOMEventTypes;
    pageViewStartTime: number;
    subscriptions: Subscription[] = [];

    constructor(
        protected classService: ClassService,
        protected eventProcessService: EventProcessService,
        protected router: Router
    ) {}

    setEventId(eventId: string): void {
        this.eventId = eventId;
        this.classService.setEventId(this.eventId);
    }

    setPageData(data: CoursePointEvent): void {
        const pageData = this.getFormattedData(data);
        this.pageData = { ...pageData, eventType: EventType.onLoad };
    }

    getFormattedData(data: CoursePointEvent): CoursePointEvent {
        return {
            ...data,
            classId: this.classService.getClassId(),
            eventId: this.eventId
        }
    }

    getButtonData(data: CoursePointEvent, eventName: string): CoursePointEvent {
        const formattedData = this.getFormattedData(data);
        return {
            ...formattedData,
            eventName
        };
    }

    onClickHandler(event): void {
        console.log('');
    }

    capturePageViewStartEvent(): void {
        this.pageViewStartTime = Date.now();
        this.sendPageData({ ...this.pageData });
    }
    
    capturePageViewEndEvent(): void {
        const timeSpent = Date.now() - this.pageViewStartTime;
        this.sendPageData({ ...this.pageData, timeSpent });
    }

    sendPageData(pageData: CoursePointEvent) {
        const eventTimestamp = getEventTimestamp();
        const data = { ...pageData, eventTimestamp };
        const subscription = this.eventProcessService.sendData(data).subscribe(
            response => {
                console.log(`Response: `, response);
                this.unSubscribeSubscriptions();
            },
            error => {
                console.log(`Error`, error);
                this.unSubscribeSubscriptions();    
            }
        );
        this.subscriptions.push(subscription);
    }

    unSubscribeSubscriptions(): void {
        this.subscriptions.forEach(subcription => subcription.unsubscribe());
    }
}