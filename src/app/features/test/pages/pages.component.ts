import { GradebookConfig } from './../../gradebook/config/gradebook.config';
import { DashboardConfig } from './../../dashboard/config/dashboard.config';
import { ContentConfig } from './../../content/config/content.config';
import { getEventTimestamp, studentId, classId, sessionId } from './../../shared/config/shared';
import { RosterConfig } from './../../roster/config/roster.config';
import { SharedService } from './../../shared/services/shared/shared.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EventProcessService } from './../../shared/services/event-process/event-process.service';
import { ClassService } from './../../shared/services/class/class.service';
import { EventPageBase } from './../../../core/models/event-page.base';
import { AfterViewInit, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CoursePointEventIds } from 'src/app/core/config/event-id.config';
import { CoursePointEvent } from 'src/app/core/models/coursepoint-event.model';
import { AssignmentsConfig } from '../../assignments/config/assignments.config';
import { ClassesConfig } from '../../classes/config/classes.config';
import { OverviewConfig } from '../../overview/config/overview.config';
import { ResultsConfig } from '../../results/config/results.config';
import { v4 as getSessionId } from 'uuid';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {
  @Input() classes: any[] = [];
  @Input() students: any[] = [];
  counter = 0;
  classId: string;
  studentId: string;
  sessionId: string;
  classList: any[];
  coursePointEventIds = CoursePointEventIds;
  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService,
    protected route: ActivatedRoute
  ) {
    super(classService, eventProcessService, router);
    this.sessionId = 'zzzzzz'; //getSessionId();
  }

  ngOnInit(): void {
    this.classList = this.classes.slice(0, 10);
    // const s = this.router.events.subscribe(event => {
    //   if(event instanceof NavigationEnd) {
    //     this.setUpDetails();
    //   }
    // });
    // this.subscriptions.push(s);
  }

  setUpDetails() {
     // this.ngAfterViewInit()
  }

  ngAfterViewInit(): void {
    const intervalId = window.setInterval(() => {
      const classIndex = Math.floor(Math.random() * (this.classList.length - 1));
      
      this.classService.setClassId(this.classList[classIndex].id);

      const studentIndex = Math.floor(Math.random() * (this.students.length - 1));
      this.studentId = this.students[studentIndex];
      
      const eventIds = Object.keys(this.coursePointEventIds).map(
        key => ({ key, value: this.coursePointEventIds[key]})
      );
    
      const index = Math.floor(Math.random() * (eventIds.length - 1));
      this.classId = eventIds[index].value;
      
      this.setEventId(this.classId);
      
      const pageConfig = this.getPageConfig(eventIds[index].key);
      this.setPageData(pageConfig);
      this.capturePageViewStartEvent();
      
      this.router.navigate(['test'],{ queryParams: {classId: this.classList[classIndex].id, studentId: this.students[studentIndex] }});
      if(this.counter >= 500) {
        clearInterval(intervalId);
        console.log(intervalId);
      }
    }, 750);
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  capturePageViewStartEvent(): void {
    this.pageViewStartTime = Date.now();
    this.sendPageData({ ...this.pageData });
  }

  getPageConfig(key) {
    switch(key) {
      case 'assignmentsPage':
        return AssignmentsConfig;
      case 'classesPage':
        return ClassesConfig;
      case 'contentPage':
        return ContentConfig;
      case 'dashoardPage':
        return DashboardConfig;
      case 'gradebookPage':
        return GradebookConfig;
      case 'overviewPage':
        return OverviewConfig;
      case 'resultsPage':
        return ResultsConfig;
      case 'rosterPage':
        return RosterConfig;
    }
  }

  sendPageData(pageData: CoursePointEvent) {
    const eventTimestamp = getEventTimestamp();
    const classId = this.route.snapshot.queryParams.classId;
    const data = { ...pageData, eventTimestamp, studentId: this.studentId, classId, sessionId: `${this.sessionId}-${this.studentId}` };
    const subscription = this.eventProcessService.sendData(data).subscribe(
        response => {
            this.counter = this.counter + 1;
            console.log(`Response: `, response, this.counter);
            this.unSubscribeSubscriptions();
        },
        error => {
            console.log(`Error`, error);
            this.unSubscribeSubscriptions();    
        }
    );
    this.subscriptions.push(subscription);
  }
}
