import { ClassService } from './../../../shared/services/class/class.service';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';
import { RosterConfig } from '../../config/roster.config';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss']
})
export class RosterPageComponent extends EventPageBase implements OnInit {
  
  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.rosterPage);
  }

  getRosterButtonData() {
    const formattedData = this.getFormattedData(RosterConfig);
    return formattedData;
  }

}
