import { classId } from './../../config/shared';
import { EventProcessService } from './../../services/event-process/event-process.service';
import { Subscription } from 'rxjs';
import { ClassService } from './../../services/class/class.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-class-dropdown',
  templateUrl: './class-dropdown.component.html',
  styleUrls: ['./class-dropdown.component.scss']
})
export class ClassDropdownComponent implements OnInit, OnDestroy {
  @Input() classes = [];
  data: any;
  subscriptions: Subscription[] = [];
  constructor(
    private classService: ClassService,
    private eventProcessService: EventProcessService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    const [ { id } ] = this.classes;
    this.updateSelectedClass(id);
    this.setupRouteSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  setupRouteSubscription() {
    const subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url.substring(1);
        this.updateConfigData(url);
      }
    });
    this.subscriptions.push(subscription);
  }

  updateSelectedClass(classId: string): void {
    this.classService.setClassId(classId);
    const url = this.router.url.substring(1);
    this.updateConfigData(url);
  }

  updateConfigData(url: string) {
    const eventId = this.classService.getEventId();
    const classId = this.classService.getClassId();
    this.data = this.eventProcessService.getEventData(
      url,
      classId,
      eventId
    );
  }

  getDropdownData() {
    return this.data;
  }
}
