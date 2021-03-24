import { EventProcessService } from './../../services/event-process/event-process.service';
import { CoursePointEvent } from './../../../../core/models/coursepoint-event.model';
import { DOMEventTypes } from './../../../../core/enums/event-type.enum';
import { Directive, HostListener, Input, OnDestroy,  } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appCaptureEvent]'
})
export class CaptureEventDirective implements OnDestroy {
  @Input() data: CoursePointEvent;
  @Input() eventType: DOMEventTypes = DOMEventTypes.click;
  @HostListener('click', ['$event.target']) onClick(event) {
    this.processEvent(event, DOMEventTypes.click);
  }
  subscriptions: Subscription[] = [];

  constructor(private eventProcessService: EventProcessService) { }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  processEvent(event, eventType: DOMEventTypes) {
    if (this.eventType !== eventType) {
      return;
    }
    const data = {
      ...this.data,
      eventTimestamp: Date.now().toString()
    };
    
    const subscription = this.eventProcessService.sendData(data).subscribe(
      response => {
        console.log(`Response: `, response);
      },
      err => {
        console.log(`Error: `, err);
      }
    );
    this.subscriptions.push(subscription);

  }
}
