import { ContentConfig } from './../../../content/config/content.config';
import { DashboardConfig } from './../../../dashboard/config/dashboard.config';
import { GradebookConfig } from './../../../gradebook/config/gradebook.config';
import { RouteSlug } from './../../../../core/enums/route-slug.enum';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssignmentsConfig } from 'src/app/features/assignments/config/assignments.config';
import { RosterConfig } from 'src/app/features/roster/config/roster.config';
import { ResultsConfig } from 'src/app/features/results/config/results.config';
import { OverviewConfig } from 'src/app/features/overview/config/overview.config';
import { ClassesConfig } from 'src/app/features/classes/config/classes.config';

@Injectable({
  providedIn: 'root'
})
export class EventProcessService {

  constructor(private http: HttpClient) { }

  getEventData(resourceUrl, classId: string, eventId: string) {
    const data = this.getEventDetails(resourceUrl);
    
    return {
      ...data,
      classId,
      eventId
    }
  }

  getEventDetails(resourceUrl: string): any {
    let data;
    switch(resourceUrl) {
      case RouteSlug.assignments:
        data = AssignmentsConfig;
        break;
      case RouteSlug.classes:
        data = ClassesConfig;
        break;
      case RouteSlug.content:
        data = ContentConfig;
        break;
      case RouteSlug.dashboard:
        data = DashboardConfig;
        break;
      case RouteSlug.gradebook:
        data = GradebookConfig;
        break;
      case RouteSlug.overview:
        data = OverviewConfig;
        break;
      case RouteSlug.results:
        data = ResultsConfig;
        break;
      case RouteSlug.roster:
        data = RosterConfig;
        break;
      default:
        data = {};
    }

    return data;
  }

  sendData(data: any): Observable<any> {
    return of(data);
    // return this.http.post(`${environment.eventBaseUrl}`, data);
  }
}
