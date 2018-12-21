import React from 'react'

import './meetup-banner.css'

const MeetupBanner = () => {
  return (
    <div className="meetup-banner">
      <h1 className="meetup-banner__title">Next Meetup</h1>
      <p className="meetup-banner__info">February 14, 2019 @ LogMeIn</p>
      <a
        className="meetup-banner__link"
        href="https://www.meetup.com/KarlsruheJS/"
        target="blank"
      >
        More Info
      </a>
    </div>
  )
}

export default MeetupBanner
