import React from 'react'

const EventDetail = ({ event }) => {
  return (
    <div className="event-detail-wrapper">
      <div className="event-detail">
        <div className="event-detail-header">
          <h3>{event.title}</h3>
          <h4>
            {event.date} - {event.time}
          </h4>
          <h4>{event.location}</h4>
        </div>
        <div className="event-detail-content">
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
