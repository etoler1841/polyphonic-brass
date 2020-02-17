import React from 'react'
import { Link } from 'gatsby'
import { useQueryParam } from 'gatsby-query-params'

const Events = ({ events, highlightActive }) => {
  const activeEventID = parseInt(useQueryParam('event', events[0].id))

  return (
    <div className="events">
      <h4>Upcoming Events</h4>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events?event=${event.id}`}>
              <div
                className={`event ${highlightActive &&
                  activeEventID === event.id &&
                  'active'}`}
              >
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
}

export default Events
