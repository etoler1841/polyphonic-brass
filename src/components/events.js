import React from 'react'
import { Link } from 'gatsby'

const Events = ({ events }) => (
  <div className="events">
    <h4>Upcoming Events</h4>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link to={`/events?event=${event.id}`}>
            <div className="event">
              <span className="event-date-time">
                {event.date} - {event.time}
              </span>
              <span className="event-title">{event.title}</span>
              <span className="event-location">{event.location}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Events
