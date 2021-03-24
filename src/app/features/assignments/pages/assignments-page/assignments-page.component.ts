import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { AssignmentsConfig } from './../../config/assignments.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CoursePointEvent } from 'src/app/core/models/coursepoint-event.model';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.scss']
})
export class AssignmentsPageComponent extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getAssignmentsPageEventId();
    this.setEventId(id);
    this.setPageData(AssignmentsConfig);
  }

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getAssignmentButtonData(eventName: string): CoursePointEvent {
    const data = this.getButtonData(AssignmentsConfig, eventName);
    return data;
  }

}
