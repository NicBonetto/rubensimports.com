import React, { Component } from 'react'

class DealerInfo extends Component {
  render() {
    return (
      <div className="inline-sections">
        <div className="col-sm-6">
          <div>
            <header className="contact-titles">
              <div className="title-spacing"></div>
              <h3>Dealer Information</h3>
              <div className="title-spacing"></div>
            </header>
          </div>
          <div id="info-box">
        <div>
          <div>
            <span className="glyphicon glyphicon-map-marker icon-box text-center"></span>
            <span className="icon-subtitle">
              Address
            </span>
            <div></div>
            <div>
              <ul>
                <li>
                  <p className="contact-li">34134 Pacific Coast Highway Dana Point, CA	92629</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <div>
            <span className="glyphicon glyphicon-earphone icon-box text-center"></span>
            <span className="icon-subtitle">
                Phone Numbers:
            </span>
            <div></div>
            <div>
              <ul>
                <li className="contact-li">
                  <span>Service:</span>
                  <span className="pull-right">949-493-5050</span>
                </li>
                <li className="contact-li">
                  <span>Sales:</span>
                  <span className="pull-right">949-350-9171</span>
                </li>
              </ul> 
            </div>
            </div>
        </div>
        <div>
            <div>
            <span className="glyphicon glyphicon-time icon-box text-center"></span>
            <span className="icon-subtitle">
                Hours:
            </span>
            <div></div>
            </div>
              <div>
                <ul>
                  <li className="contact-li">
                    <span>Monday - Friday:</span>
                  </li>
                  <li className="contact-li">
                    <span>Saturday:</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DealerInfo