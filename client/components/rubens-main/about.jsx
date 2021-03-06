import React, { Component } from 'react'
import NavBar from './landing-navbar.jsx'
import History from './history.jsx'
import MeetUs from './meet-team.jsx'

class About extends Component {
  render () {
    return (
      <section className="container-fluid">
        <NavBar/>
        <div id="about">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center greet-text">
                <header id="welcome">
                  <h1 className="heading-text">Welcome to Ruben's Imports.</h1>
                </header>
                <div id="story">
                  <h3 className="heading-text">This is our story.</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="bouncing" id="chev-container">
                <div id="chevron-down"></div>
              </div>
            </div>
          </div>
        </div>
        <History/>
        <MeetUs/>
      </section>
    )
  }
}

export default About