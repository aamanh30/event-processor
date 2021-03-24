import { ClassService } from './../../../shared/services/class/class.service';
import { GradebookConfig } from './../../config/gradebook.config';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';
import { OverviewConfig } from 'src/app/features/overview/config/overview.config';

@Component({
  selector: 'app-gradebook-page',
  templateUrl: './gradebook-page.component.html',
  styleUrls: ['./gradebook-page.component.scss']
})
export class GradebookPageComponent extends EventPageBase implements OnInit {

  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.gradebookPage);
  }

  getGradebookButtonData() {
    const formattedData = this.getFormattedData(GradebookConfig);
    return formattedData;
  }
}
