import React from 'react'
import { Link } from 'gatsby'

const Events = ({ events, highlightActive }) => {
  const buildLinkClasses = (
    { href, location: { pathname, search } },
    event
  ) => {
    let className = 'event'

    if (highlightActive && !search) {
      if (event.id === events[0].id) className += ' active'
    } else {
      if (href === `${pathname}${search}`) className += ' active'
    }

    return {
      className
    }
  }

  return (
    <div className="events">
      <h4>Upcoming Events</h4>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link
              to={`/events?event=${event.id}`}
              getProps={props => buildLinkClasses(props, event)}
            >
              <span className="event-date-time">
                {event.date} - {event.time}
              </span>
              <span className="event-title">{event.title}</span>
              <span className="event-location">{event.location}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Events
