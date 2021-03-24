import { classList } from './../../config/shared';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  classId: string;
  eventId: string;

  constructor() { }

  setClassId(classId: string): void {
    this.classId = classId;
  }

  getClassId(): string {
    return this.classId;
  }

  setEventId(eventId: string): void {
    this.eventId = eventId;
  }

  getEventId(): string {
    return this.eventId;
  }

  getClassList(): Observable<any> {
    return of(classList);
  }
}
