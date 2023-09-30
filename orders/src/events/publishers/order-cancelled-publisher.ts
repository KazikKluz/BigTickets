import { Subjects, Publisher, OrderCancelledEvent } from '@webfuzee/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
