import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const SecondPage = () => (
  <Layout>
    <h1>Page 2</h1>
    <Link to="/">Go to page 1</Link>
  </Layout>
)

export default SecondPage
