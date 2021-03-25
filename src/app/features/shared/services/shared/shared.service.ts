import { HttpClient } from '@angular/common/http';
import { CoursePointEventIds as CoursePointEventIdsModel } from './../../../../core/models/coursepoint-event.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private eventIds: CoursePointEventIdsModel;
  constructor(private http: HttpClient) { }

  getEventIds() {
    return this.http.get('../../../../../assets/events.json').pipe(
      map(
        ({ data }: any) => {
          this.eventIds = data;
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
