import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Directives Architect</title>
        <meta property="og:title" content="Product Directives Architect" />
      </Helmet>
    </div>
  )
}

export default Home
