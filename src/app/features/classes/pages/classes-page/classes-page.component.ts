import { ClassService } from './../../../shared/services/class/class.service';
import { ClassesConfig } from './../../config/classes.config';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.scss']
})
export class ClassesPageComponent extends EventPageBase implements OnInit {

  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.classesPage);
  }

  getClassesButtonData() {
    const formattedData = this.getFormattedData(ClassesConfig);
    return formattedData;
  }

}
