import { Subjects, Publisher, ExpirationCompleteEvent } from '@webfuzee/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
