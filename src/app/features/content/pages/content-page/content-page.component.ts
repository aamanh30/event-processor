import { ClassService } from './../../../shared/services/class/class.service';
import { ContentConfig } from './../../config/content.config';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent  extends EventPageBase implements OnInit {

  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.contentPage);
  }

  getContentButtonData() {
    const formattedData = this.getFormattedData(ContentConfig);
    return formattedData;
  }
}
