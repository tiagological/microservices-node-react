import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@tiagological-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
