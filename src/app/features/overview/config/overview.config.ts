import { environment } from '../../../../environments/environment.prod';
import { studentId, classId, productIsbn, sessionId } from '../../shared/config/shared';
import { EventType } from '../../../core/enums/event-type.enum';
import { CoursePointEvent } from '../../../core/models/coursepoint-event.model';

export const eventName = 'Overview Page';

export const OverviewConfig: CoursePointEvent = {
    eventId: '',
    eventType: EventType.onClick,
    eventName,
    studentId,
    classId,
    productIsbn,
    resourceUrl: `${environment.baseUrl}overview`,
    eventTimestamp: '',
    sessionId
}