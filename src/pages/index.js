import React from 'react'
import Layout from '../components/layout/layout'

import logo from '../images/js-logo.svg'

const IndexPage = () => (
  <Layout>
    <section
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <img
        src={logo}
        alt="Karlsruhe JS"
        style={{
          height: '120px',
        }}
      />
      <h4
        style={{
          color: '#4a4a4a',
          fontWeight: '100',
          fontSize: '2em',
        }}
      >
        The meetup for JavaScript lovers in Karlsruhe.
      </h4>
      <h1
        style={{
          fontSize: '3em',
          color: '#4a4a4a',
        }}
      >
        KarlsruheJS
      </h1>
    </section>
  </Layout>
)

export default IndexPage
