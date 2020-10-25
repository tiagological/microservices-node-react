import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@tiagological-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
