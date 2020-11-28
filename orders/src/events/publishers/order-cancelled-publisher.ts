import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@tiagological-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
