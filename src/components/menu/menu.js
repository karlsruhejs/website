import React from 'react'
import { Link } from 'gatsby'

import './menu.css'

const Menu = () => {
  return (
    <div>
      <section className="menu__section">
        <div className="menu__content-wrapper">
          <ul className="menu">
            <li>
              <Link
                to="/"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/meetups"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                Meetups
              </Link>
            </li>
            <li>
              <Link
                to="/join"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                Join
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Menu
