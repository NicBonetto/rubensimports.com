import React, { Component } from 'react'
import NavBar from './landing-navbar.jsx'

class LandingPage extends Component {
  render() {
    return (
      <section className="container-fluid" id="landing">
        <NavBar/>
        <div className="row">
          <div className="col-md-5 col-md-offset-1">
            <header className="light-text text-center" id="landing-header">
              <div>
                <h3>Mercedes Benz, Porsche, and BMW.</h3>
              </div>
              <div>
                <h2>Unparalled service proven through our honesty, integrity, and quality.</h2>
              </div>
            </header>
          </div>
        </div>
      </section>
    )
  }
}

export default LandingPage