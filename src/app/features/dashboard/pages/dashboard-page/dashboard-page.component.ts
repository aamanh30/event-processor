import { ClassService } from './../../../shared/services/class/class.service';
import { DashboardConfig } from './../../config/dashboard.config';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent extends EventPageBase implements OnInit {

  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.dashoardPage);
  }

  getDashboardButtonData() {
    const formattedData = this.getFormattedData(DashboardConfig);
    return formattedData;
  }
}
