import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <section className="container-fluid" id="landing-nav">
        <div className="row">
          <div className="col-xs-12">
            <div id="logo">
              <img src="/images/logo.png"/>
            </div>
            <div id="landing-nav-items" className="pull-right">
              <ul>
                <div className="landing-nav-item">
                  <li><Link to="/">Home</Link></li>
                </div>
                <div className="landing-nav-item">
                  <li><Link to="/home/services">Services</Link></li>
                </div>
                <div className="landing-nav-item">
                    <li><Link to="/home/about">About</Link></li>
                </div>
                <div className="landing-nav-item">
                  <li><Link to="/home/contact">Contact</Link></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default NavBar