import { Publisher, Subjects, TicketUpdatedEvent } from '@webfuzee/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
