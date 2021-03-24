import { ClassService } from './../../../shared/services/class/class.service';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { EventPageBase } from './../../../../core/models/event-page.base';
import { Component, OnInit } from '@angular/core';
import { ResultsConfig } from '../../config/results.config';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent extends EventPageBase implements OnInit {
  
  constructor(protected classService: ClassService) {
    super(classService);
   }

  ngOnInit(): void {
    this.setEventId(CoursePointEventIds.resultsPage);
  }

  getResultsButtonData() {
    const formattedData = this.getFormattedData(ResultsConfig);
    return formattedData;
  }

}
