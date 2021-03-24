import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { RosterConfig } from '../../config/roster.config';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss']
})
export class RosterPageComponent extends EventPageBase implements OnInit, AfterViewInit, OnDestroy {
  
  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getRosterPageEventId();
    this.setEventId(id);
    this.setPageData(RosterConfig);
  }
  

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  } 
  
  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getRosterButtonData() {
    const formattedData = this.getFormattedData(RosterConfig);
    return formattedData;
  }

}
