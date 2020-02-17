import React from 'react'
import { useQueryParam } from 'gatsby-query-params'

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
  const eventID = parseInt(useQueryParam('event') || events[0].id)
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

export default EventsPage
