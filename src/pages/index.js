import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>We're still getting things ready.</p>
    <p>
      Need to contact us now? Email us at{' '}
      <a href="mailto:polyphonicbrass@gmail.com">PolyphonicBrass@gmail.com</a>.
    </p>
  </Layout>
)

export default IndexPage
