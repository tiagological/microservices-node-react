import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@tiagological-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
