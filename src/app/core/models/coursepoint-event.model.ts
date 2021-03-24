import { EventType } from './../enums';

export interface CoursePointEvent {
    messageId?: string;
    eventId: string;
    eventType: EventType;
    eventName: string;
    studentId: string;
    classId: string;
    productIsbn: string;
    resourceUrl: string;
    eventTimestamp: string;
    sessionId: string;
    timeSpent?: number;
}

export interface CoursePointEventIds {
    assignmentsPage: string;
    classesPage: string;
    contentPage: string;
    dashoardPage: string;
    gradebookPage: string;
    overviewPage: string;
    resultsPage: string;
    rosterPage: string;
}