import { ClassService } from './../../../shared/services/class/class.service';
import { AssignmentsConfig } from './../../config/assignments.config';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.scss']
})
export class AssignmentsPageComponent extends EventPageBase implements OnInit {

  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.assignmentsPage);
  }

  getAssignmentsButtonData() {
    const formattedData = this.getFormattedData(AssignmentsConfig);
    return formattedData;
  }

}
