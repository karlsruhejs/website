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
                home
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                team
              </Link>
            </li>
            <li>
              <Link
                to="/meetups"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                meetups
              </Link>
            </li>
            <li>
              <Link
                to="/join"
                className="menu__item"
                activeClassName="menu__item--selected"
              >
                join
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Menu
