import React from 'react'
import Layout from '../components/layout/layout'

import eugene from '../images/eugene.svg'
import kahlil from '../images/kahlil.svg'
import emma from '../images/emma.svg'
import manuel from '../images/manuel.svg'

import './team.css'

const TeamPage = () => (
  <Layout>
    <h1 className="title">Team</h1>
    <div className="team__image-wrapper">
      <section className="team__member-group">
        <img className="team__member-image" src={eugene} alt="Eugene" />
        <div className="team__member-info">
          <h3 className="team__member-name">Eugene Lastname</h3>
          <p>Job title @ Company</p>
          <a href="www.twitter.com">Link to Twitter</a>
        </div>
      </section>

      <section className="team__member-group">
        <img className="team__member-image" src={kahlil} alt="Kahlil" />
        <div className="team__member-info">
          <h3 className="team__member-name">Eugene Lastname</h3>
          <p>Job title @ Company</p>
          <a href="www.twitter.com">Link to Twitter</a>
        </div>
      </section>
      <section className="team__member-group">
        <img className="team__member-image" src={emma} alt="Emma" />
        <div className="team__member-info">
          <h3 className="team__member-name">Eugene Lastname</h3>
          <p>Job title @ Company</p>
          <a href="www.twitter.com">Link to Twitter</a>
        </div>
      </section>
      <section className="team__member-group">
        <img className="team__member-image" src={manuel} alt="Manuel" />
        <div className="team__member-info">
          <h3 className="team__member-name">Eugene Lastname</h3>
          <p>Job title @ Company</p>
          <a href="www.twitter.com">Link to Twitter</a>
        </div>
      </section>
    </div>
  </Layout>
)

export default TeamPage
