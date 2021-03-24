import { EventType } from './../enums';

export interface CoursePointEvent {
    eventId: string;
    eventType: EventType;
    eventName: string;
    studentId: string;
    classId: string;
    productIsbn: string;
    resourceUrl: string;
    eventTimestamp: string;
    sessionId: string;
}