import { Subjects, Publisher, PaymentCreatedEvent } from '@webfuzee/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
