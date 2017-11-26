import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class Location extends Component {
  render() {
    return (
      <div id="map-container">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 33.466641,
            lng: -117.702547
          }}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          <Marker
            title={'Rubens Imports'}
            name={'Rubens Imports'}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCuGUFpel1UAtABl6n8zBDTzeBJejbPkA'
})(Location)