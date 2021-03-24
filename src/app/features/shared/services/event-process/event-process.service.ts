import { CoursePointEvent } from './../../../../core/models/coursepoint-event.model';
import { ContentConfig } from './../../../content/config/content.config';
import { DashboardConfig } from './../../../dashboard/config/dashboard.config';
import { GradebookConfig } from './../../../gradebook/config/gradebook.config';
import { RouteSlug } from './../../../../core/enums/route-slug.enum';
import { environment } from './../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssignmentsConfig } from 'src/app/features/assignments/config/assignments.config';
import { RosterConfig } from 'src/app/features/roster/config/roster.config';
import { ResultsConfig } from 'src/app/features/results/config/results.config';
import { OverviewConfig } from 'src/app/features/overview/config/overview.config';
import { ClassesConfig } from 'src/app/features/classes/config/classes.config';
import { v4 as getMessageId } from 'uuid';
import { CookieService } from 'ngx-cookie';
@Injectable({
  providedIn: 'root'
})
export class EventProcessService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService  
  ) { }

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

  sendData(data: CoursePointEvent): Observable<any> {
    const eventData = {
      ...data,
      messageId: getMessageId()
    };

    let headers = new HttpHeaders();
    // const cloudFrontPolicy = this.cookieService.get('CloudFront-Policy');
    // const cloudFrontSignature = this.cookieService.get('CloudFront-Signature');
    // const cloudFrontKeyPairId = this.cookieService.get('CloudFront-Key-Pair-Id');
    // headers = headers.set('CloudFront-Policy', cloudFrontPolicy);
    // headers = headers.set('CloudFront-Signature', cloudFrontSignature);
    // headers = headers.set('CloudFront-Key-Pair-Id', cloudFrontKeyPairId);
    // headers = headers.set('sso-token', 'SY0VozFM2G3Bqep4tkBvClTgd+wgVYR3quoo6FdoP0UePN+pWl0pw56whOG/zkQAU4heXFajT+DRR3K49Batr6bPBOAKxMxhAXTKocKe/dwkOlxsb3hh4yRbPcfPbNTZmBWJcOD0CFIfXT64GEdcdY0nJKQUR/+IHskssG4rH2sjNPiwoua85FmqpmhAp3vY8OtWsYnPL8EbKDjFdhMqOsP8cvtUotnwSo0dlDObJb3w61axic8vwRsoOMV2Eyo630wrBBu7150YywUNIWWq94cfBV0TUW/S');
    // headers = headers.set('x-access-token', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzc28ud2tocGUuY29tIiwiYXVkIjoiM2MzOTg0NmMtODg2YS1kZjExLWIxMTUtMDA1MDU2YzAwMDA4IiwiYXV0aF90aW1lIjoxNjE2NjExMzkyLCJuYW1lIjoiRGV2ZWxvcGVyQ1AgU3R1ZGVudCIsImp0aSI6ImMyYTM2MTg0LWE1YTQtNGI4My1hZDUwLTlhYjMzMzgzYjU4ZSIsImlhdCI6MTYxNjYxMTM5MiwiZXhwIjoxNjE2Njk3NzkyLCJzdWIiOiJlY2M0YzgxOC04YzliLTQ4OWEtYWI4Mi00MTU1MDBlNDc4MjYiLCJyb2xlcyI6IndraHBlLWVuZCB1c2VyIiwid2tocGVfcGVybWlzc2lvbnMiOlsiQ2FuVXNlUGVyc29uYWxpemF0aW9uRmVhdHVyZXMiXSwid2tocGVfdG9rZW4iOiJTWTBWb3pGTTJHM0JxZXA0dGtCdkNsVGdkK3dnVllSM3F1b282RmRvUDBVZVBOK3BXbDBwdzU2d2hPRy96a1FBVTRoZVhGYWpUK0RSUjNLNDlCYXRyNmJQQk9BS3hNeGhBWFRLb2NLZS9kd2tPbHhzYjNoaDR5UmJQY2ZQYk5UWm1CV0pjT0QwQ0ZJZlhUNjRHRWRjZFkwbkpLUVVSLytJSHNrc3NHNHJIMnNqTlBpd291YTg1Rm1xcG1oQXAzdlk4T3RXc1luUEw4RWJLRGpGZGhNcU9zUDhjdnRVb3Rud1NvMGRsRE9iSmIzdzYxYXhpYzh2d1Jzb09NVjJFeW82MzB3ckJCdTcxNTBZeXdVTklXV3E5NGNmQlYwVFVXL1MiLCJ0b2tlbl90eXBlIjoiYmVhcmVyIn0.AQtGLPQupC04wMPQ3XiwQXqFTHFS3n9rAbfr-WqvKnVyedjXEvWYBtwy_tqeXVDyt0eWrUK_-N_o_bJ7xLX37GgJwR2WIUhlUlx6N-XVM39jRy6vUf6GvXqNh_kTIUei3wPbJQLbw9AU98ZjrXab20eiFhCAyWwDfbP17xGM_28');
    // headers = headers.set('x-auth-token', `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzc28ud2tocGUuY29tIiwiYXVkIjoiM2MzOTg0NmMtODg2YS1kZjExLWIxMTUtMDA1MDU2YzAwMDA4IiwiYXV0aF90aW1lIjoxNjE2NjExMzkyLCJuYW1lIjoiRGV2ZWxvcGVyQ1AgU3R1ZGVudCIsImp0aSI6ImMyYTM2MTg0LWE1YTQtNGI4My1hZDUwLTlhYjMzMzgzYjU4ZSIsImlhdCI6MTYxNjYxMTM5MiwiZXhwIjoxNjE2Njk3NzkyLCJzdWIiOiJlY2M0YzgxOC04YzliLTQ4OWEtYWI4Mi00MTU1MDBlNDc4MjYiLCJyb2xlcyI6IndraHBlLWVuZCB1c2VyIiwid2tocGVfcGVybWlzc2lvbnMiOlsiQ2FuVXNlUGVyc29uYWxpemF0aW9uRmVhdHVyZXMiXSwid2tocGVfdG9rZW4iOiJTWTBWb3pGTTJHM0JxZXA0dGtCdkNsVGdkK3dnVllSM3F1b282RmRvUDBVZVBOK3BXbDBwdzU2d2hPRy96a1FBVTRoZVhGYWpUK0RSUjNLNDlCYXRyNmJQQk9BS3hNeGhBWFRLb2NLZS9kd2tPbHhzYjNoaDR5UmJQY2ZQYk5UWm1CV0pjT0QwQ0ZJZlhUNjRHRWRjZFkwbkpLUVVSLytJSHNrc3NHNHJIMnNqTlBpd291YTg1Rm1xcG1oQXAzdlk4T3RXc1luUEw4RWJLRGpGZGhNcU9zUDhjdnRVb3Rud1NvMGRsRE9iSmIzdzYxYXhpYzh2d1Jzb09NVjJFeW82MzB3ckJCdTcxNTBZeXdVTklXV3E5NGNmQlYwVFVXL1MiLCJ0b2tlbl90eXBlIjoiYmVhcmVyIn0.AQtGLPQupC04wMPQ3XiwQXqFTHFS3n9rAbfr-WqvKnVyedjXEvWYBtwy_tqeXVDyt0eWrUK_-N_o_bJ7xLX37GgJwR2WIUhlUlx6N-XVM39jRy6vUf6GvXqNh_kTIUei3wPbJQLbw9AU98ZjrXab20eiFhCAyWwDfbP17xGM_28`);
    // headers = headers.set('x-auth-token-id', `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzc28ud2tocGUuY29tIiwiYXVkIjoiM2MzOTg0NmMtODg2YS1kZjExLWIxMTUtMDA1MDU2YzAwMDA4IiwiYXV0aF90aW1lIjoxNjE2NjExNDAwLCJuYW1lIjoiRGV2ZWxvcGVyQ1AgU3R1ZGVudCIsImp0aSI6IjRiYzRiNzgwLTc0YjItNDU3Ny1iYTJjLWU3NDhjZDA4ZWFiNCIsImlhdCI6MTYxNjYxMTQwMCwiZXhwIjoxNjE2Njk3ODAwLCJzdWIiOiJlY2M0YzgxOC04YzliLTQ4OWEtYWI4Mi00MTU1MDBlNDc4MjYiLCJyb2xlcyI6IndraHBlLWVuZCB1c2VyIiwid2tocGVfcGVybWlzc2lvbnMiOlsiQ2FuVXNlUGVyc29uYWxpemF0aW9uRmVhdHVyZXMiXSwiZ2l2ZW5fbmFtZSI6IkRldmVsb3BlckNQIiwiZmFtaWx5X25hbWUiOiJTdHVkZW50IiwiZW1haWwiOiJkZXYucGh4LnN0dWRlbnRAcGh4LmNvbSIsInVwZGF0ZWRfYXQiOjE2MTI0NjY1NDQsIndraHBlX2FjdGl2ZV9zdWJzY3JpcHRpb25zIjoiW3tcImlzYm5cIjpcIjk3ODE5NzUxMjMzNDVcIixcInBlcnNvbmFcIjpcIlN0dWRlbnRcIixcImNvZGVcIjpcIjk3ODE5NzUxMjMzNDVcIn0se1wiaXNiblwiOlwiOTc4MTk3NTEwMDMwOFwiLFwicGVyc29uYVwiOlwiU3R1ZGVudFwiLFwiY29kZVwiOlwiOTc4MTk3NTEwMDMwOFwifSx7XCJpc2JuXCI6XCI5NzgxOTc1MTEwMTE2XCIsXCJwZXJzb25hXCI6XCJTdHVkZW50XCIsXCJjb2RlXCI6XCI5NzgxOTc1MTEwMTE2XCJ9LHtcImlzYm5cIjpcIjE5MTAzMTkxMDMxMDBcIixcInBlcnNvbmFcIjpcIlN0dWRlbnRcIixcImNvZGVcIjpcIjE5MTAzMTkxMDMxMDBcIn1dIn0.N717cBS4nGop5kPL74zR1cjFB_lutpSnpn4CWJ8fMaWuJr4Met9FxhpjKM-3yB0Lu9e28Yu2wf60KgI1jc24gpFo8yDHXYM5zvS8KAoBqtWeVd2eUanYoTN9RVVmlkLLnO9FdVDl9rfQHtE6kPe7Ns6xT7Fsvp6-GfQ-2XOcBBY`);
    // return of(eventData);
    return this.http.post(`${environment.eventBaseUrl}`, eventData, { headers });
  }
}
