import React from 'react'

/**
 * These are placeholder events. This will ultimately read
 * from Google's Calendar API.
 */
const events = [
  {
    id: 1,
    date: 'March 13, 2020',
    time: '7:00 PM',
    location: 'St. Stephen Roman Catholic Church',
    title: 'St. Stephen Fish Fry'
  },
  {
    id: 2,
    date: 'April 18, 2020',
    time: '7:30 PM',
    location: 'Saenger Theatre',
    title: 'Pensacola Civic Band Concert'
  },
  {
    id: 3,
    date: 'June 16, 2020',
    time: '7:00 PM',
    location: 'Cokesbury United Methodist Church',
    title: 'PSC Music Appreciation Concert'
  },
  {
    id: 4,
    date: 'July 7, 2020',
    time: '7:00 PM',
    location: 'Cokesbury United Methodist Church',
    title: 'PSC Music Appreciation Concert'
  },
  {
    id: 5,
    date: 'August 13, 2020',
    time: '7:00 PM',
    location: 'Pensacola State College - Ashmore Auditorium',
    title: 'PBQ does PDQ'
  }
]

const Events = () => (
  <div className="events">
    <h4>Upcoming Events</h4>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <div className="event">
            <span className="event-date-time">
              {event.date} - {event.time}
            </span>
            <span className="event-title">{event.title}</span>
            <span className="event-location">{event.location}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default Events
