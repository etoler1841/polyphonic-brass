import React from 'react'

/**
 * These are placeholder events. This will ultimately read
 * from Google's Calendar API.
 */
import events from '../content/events'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'
import EventDetail from '../components/event-detail'

const EventsPage = () => {
  const eventID = getCurrentEvent()
  const focusedEvent = events.find(event => event.id === eventID)

  return (
    <Layout>
      <SEO
        title="Events"
        lang="en"
        description="Upcoming engagements for the Polyphonic Brass."
      />
      {/* Hero image/slider */}
      <div className="two-column-display">
        <Events events={events} highlightActive />
        <EventDetail event={focusedEvent} />
      </div>
    </Layout>
  )
}

const getCurrentEvent = () => {
  if (typeof window === 'undefined') return events[0].id
  const { search } = window.location
  const matches = search.match(/event=(\d+)/)
  if (matches) {
    return parseInt(matches[1])
  } else {
    return events[0].id
  }
}

export default EventsPage
