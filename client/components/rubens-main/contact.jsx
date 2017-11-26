import React, { Component } from 'react'
import NavBar from './landing-navbar.jsx'
import Form from './contact-form.jsx'
import DealerInfo from './dealer-info.jsx'
import Location from './map.jsx'

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="container-fluid">
        <div className="row" id="contact-image">
          <div className="col-sm-12">
            <NavBar/>
          </div>
          <div className="col-sm-12">
            <div id="contact-image">
              <div id="contact-header-box" className="text-center">
                <header className="contact-header">
                  <h1>CONTACT US</h1>
                </header>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Form/>
          <DealerInfo/>
        </div>
        <div className="title-spacing"></div>
        <div className="row">
          <div className="col-sm-12">
            <Location/>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact