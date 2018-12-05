import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Location } from '@reach/router'

import Menu from '../menu/menu'
import './layout.css'

const Layout = ({ children }) => (
  <Location>
    {({ location }) => (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          const classes =
            location.pathname === '/' ? 'layout layout__homepage' : 'layout'
          return (
            <div className={classes}>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  {
                    name: 'description',
                    content: 'A portfolio for Emma Wedekind',
                  },
                  { name: 'keywords', content: 'react, web development' },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Menu />
              <div className="layout layout__child-container">{children}</div>
            </div>
          )
        }}
      />
    )}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
