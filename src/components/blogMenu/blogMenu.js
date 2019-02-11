import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import './blogMenu.css'

export const BlogMenu = ({ data }) => (
  <StaticQuery
    query={graphql`
      query BlogMenuQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                author
                date
                description
                formattedDate
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        <button className="blogMenu__button" onClick={toggleSidebar}>
          <svg viewBox="0 0 63 42" className="blogMenu__icon">
            <path
              fill="#4A4A4A"
              d="M0.75,37.5 L62.25,37.5 C62.6642136,37.5 63,37.8357864 63,38.25 L63,41.25 C63,41.6642136 62.6642136,42 62.25,42 L0.75,42 C0.335786438,42 5.07265313e-17,41.6642136 0,41.25 L0,38.25 C-5.07265313e-17,37.8357864 0.335786438,37.5 0.75,37.5 Z M0.75,18.75 L47.25,18.75 C47.6642136,18.75 48,19.0857864 48,19.5 L48,22.5 C48,22.9142136 47.6642136,23.25 47.25,23.25 L0.75,23.25 C0.335786438,23.25 5.07265313e-17,22.9142136 0,22.5 L0,19.5 C-5.07265313e-17,19.0857864 0.335786438,18.75 0.75,18.75 Z M0.75,2.22044605e-16 L62.25,2.22044605e-16 C62.6642136,1.45954808e-16 63,0.335786438 63,0.75 L63,3.75 C63,4.16421356 62.6642136,4.5 62.25,4.5 L0.75,4.5 C0.335786438,4.5 5.07265313e-17,4.16421356 0,3.75 L0,0.75 C-5.07265313e-17,0.335786438 0.335786438,7.6089797e-17 0.75,2.22044605e-16 Z"
            />
          </svg>
        </button>
        <aside className="blogMenu">
          <button className="blogMenu__closeButton" onClick={toggleSidebar}>
            <svg viewBox="0 0 89 89" className="blogMenu__closeIcon">
              <polygon
                fill="#FFF"
                fillRule="evenodd"
                points="1348.89 311.89 1344 307 1304.53 346.47 1304.45 346.39 1304.36 346.47 1264.89 307 1260 311.89 1299.47 351.36 1260 390.83 1264.89 395.72 1304.36 356.25 1304.45 356.33 1304.53 356.25 1344 395.72 1348.89 390.83 1309.42 351.36"
                transform="translate(-1260 -307)"
              />
            </svg>
          </button>
          <ul className="blogMenu__list">
            {data.allMarkdownRemark.edges.map(post => (
              <li
                className="blogMenu__listItem"
                key={post.node.frontmatter.date}
              >
                <Link
                  to={post.node.frontmatter.path}
                  className="blogMenu__link"
                >
                  {post.node.frontmatter.formattedDate}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    )}
  />
)

export const toggleSidebar = () => {
  const sidebar = document.querySelector('.blogMenu')
  sidebar.classList.toggle('blogMenu--visible')
}
