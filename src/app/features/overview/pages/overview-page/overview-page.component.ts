import { ClassService } from './../../../shared/services/class/class.service';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';
import { OverviewConfig } from '../../config/overview.config';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent extends EventPageBase implements OnInit {

  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.overviewPage);
  }

  getOverviewButtonData() {
    const formattedData = this.getFormattedData(OverviewConfig);
    return formattedData;
  }
}
