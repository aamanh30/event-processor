import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { ContentConfig } from './../../config/content.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent  extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getContentPageEventId();
    this.setEventId(id);
    this.setPageData(ContentConfig);
  }

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getContentButtonData() {
    const formattedData = this.getFormattedData(ContentConfig);
    return formattedData;
  }
}
