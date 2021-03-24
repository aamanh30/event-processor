import { SharedService } from './../../../shared/services/shared/shared.service';
import { Router } from '@angular/router';
import { EventProcessService } from './../../../shared/services/event-process/event-process.service';
import { ClassService } from './../../../shared/services/class/class.service';
import { DashboardConfig } from './../../config/dashboard.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent
  extends EventPageBase
  implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    protected classService: ClassService,
    protected eventProcessService: EventProcessService,
    protected router: Router,
    protected sharedService: SharedService
  ) {
    super(classService, eventProcessService, router);
  }

  ngOnInit(): void {
    const id = this.sharedService.getDashboardPageEventId();
    this.setEventId(id);
    this.setPageData(DashboardConfig);
  }

  ngAfterViewInit(): void {
    this.capturePageViewStartEvent();
  }

  ngOnDestroy(): void {
    this.capturePageViewEndEvent();
  }

  getDashboardButtonData() {
    const formattedData = this.getFormattedData(DashboardConfig);
    return formattedData;
  }
}
