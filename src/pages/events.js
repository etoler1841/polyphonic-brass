import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Events from '../components/events'

const EventsPage = () => (
  <Layout>
    <SEO
      title="Events"
      lang="en"
      description="Upcoming engagements for the Polyphonic Brass."
    />
    {/* Hero image/slider */}
    <Events />
  </Layout>
)

export default EventsPage
