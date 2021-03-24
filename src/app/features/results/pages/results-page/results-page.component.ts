import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { ResultsConfig } from '../../config/results.config';
import { CoursePointEvent } from 'src/app/core/models/coursepoint-event.model';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {
  
  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getResultsPageEventId();
    this.setEventId(id);
    this.setPageData(ResultsConfig);
  }

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getResultButtonData(eventName: string): CoursePointEvent {
    const formattedData = this.getButtonData(ResultsConfig, eventName);
    return formattedData;
  }

}
