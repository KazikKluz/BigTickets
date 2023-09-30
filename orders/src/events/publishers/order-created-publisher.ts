import { Publisher, OrderCreatedEvent, Subjects } from '@webfuzee/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
