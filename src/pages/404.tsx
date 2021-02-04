import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go home</Link>
  </Layout>
)

export default NotFoundPage
