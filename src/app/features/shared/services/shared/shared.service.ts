import { CoursePointEventIds as CoursePointEventIdsModel } from './../../../../core/models/coursepoint-event.model';
import { CoursePointEventIds } from './../../../../core/config/event-id.config';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private eventIds: CoursePointEventIdsModel;
  constructor() { }

  getEventIds() {
    return of(CoursePointEventIds).pipe(
      switchMap(
        data => {
          this.eventIds = data;
          console.log(data);
          return of(null); 
      })
    );
  }

  getAssignmentsPageEventId(): string {
    return this.eventIds.assignmentsPage;
  }

  getClassesPageEventId(): string {
    return this.eventIds.classesPage;
  }

  getContentPageEventId(): string {
    return this.eventIds.contentPage;
  }

  getDashboardPageEventId(): string {
    return this.eventIds.dashoardPage;
  }

  getGradebookPageEventId(): string {
    return this.eventIds.gradebookPage;
  }

  getOverviewPageEventId(): string {
    return this.eventIds.overviewPage;
  }

  getResultsPageEventId(): string {
    return this.eventIds.resultsPage;
  }

  getRosterPageEventId(): string {
    return this.eventIds.rosterPage;
  }

}
