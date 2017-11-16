import React, { Component } from 'react'
import NavBar from '../rubens-main/landing-navbar.jsx'

class ServiceMain extends Component {
  render() {
    return (
      <section className="container-fluid" id="main-service">
        <NavBar/>
        <div className="row">
          <div className="col-sm-12" id="service-description">
            <div id="service-header">
              <header className="light-text text-center">
                <h3>From car servicing to sales, we are dedicated to maintaining top tier customer service.</h3>
              </header>
            </div>
          </div>
          <div className="col-sm-6 fade-dark">
            <div className="text-center services-text">
              <h2 className="dark-text">Car Service</h2>
            </div>
          </div>
          <div className="col-sm-6 fade-dark">
            <div className="text-center services-text">
              <h2 className="dark-text">Car Sales</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServiceMain