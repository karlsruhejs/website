import React from 'react'
import Layout from '../components/layout/layout'

import logo from '../images/logo.png'

const IndexPage = () => (
  <Layout color={'blue'}>
    <section
    // style={{
    //   backgroundColor: '#FED008',
    //   position: 'fixed',
    //   top: '0',
    //   left: '0',
    //   height: '100vh',
    //   width: '100vw',
    // }}
    >
      <img
        src={logo}
        alt="Karlsruhe JS"
        style={{
          height: '75px',
        }}
      />
      <h4
        style={{
          fontWeight: '100',
          color: '#4a4a4a',
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
