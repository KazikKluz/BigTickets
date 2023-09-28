import { Publisher, Subjects, TicketCreatedEvent } from '@webfuzee/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
