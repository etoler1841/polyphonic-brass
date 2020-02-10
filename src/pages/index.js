import React from 'react'

import Events from '../components/events'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      lang="en"
      description="The Polyphonic Brass are a brass quintet based in Pensacola, FL."
    />
    {/* Hero image/slider */}
    <Events />
    {/* Blog Posts */}
  </Layout>
)

export default IndexPage
