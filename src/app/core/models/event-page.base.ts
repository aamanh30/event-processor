import { ClassService } from './../../features/shared/services/class/class.service';
import { DOMEventTypes } from './../enums/event-type.enum';
import { CoursePointEvent } from './coursepoint-event.model';

export class EventPageBase {
    eventId: string;
    eventTypes = DOMEventTypes;

    constructor(protected classService: ClassService) {}

    setEventId(eventId: string): void {
        this.eventId = eventId;
        this.classService.setEventId(this.eventId);
    }

    getFormattedData(data: any): CoursePointEvent {
        return {
            ...data,
            classId: this.classService.getClassId(),
            eventId: this.eventId
        }
    } 

    onClickHandler(event): void {
        console.log(`Click Occured`);
    }
}