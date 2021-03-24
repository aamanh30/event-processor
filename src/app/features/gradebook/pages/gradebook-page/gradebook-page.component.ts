import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { GradebookConfig } from './../../config/gradebook.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gradebook-page',
  templateUrl: './gradebook-page.component.html',
  styleUrls: ['./gradebook-page.component.scss']
})
export class GradebookPageComponent extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getGradebookPageEventId();
    this.setEventId(id);
    this.setPageData(GradebookConfig);
  }

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getGradebookButtonData() {
    const formattedData = this.getFormattedData(GradebookConfig);
    return formattedData;
  }
}
