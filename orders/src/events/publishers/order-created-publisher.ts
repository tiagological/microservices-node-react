import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@tiagological-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
