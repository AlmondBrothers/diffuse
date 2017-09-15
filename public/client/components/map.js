import React from 'react';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Button from './map-button.js';
import NavBar from './map-nav.js';
import App from './app.js';
import MapView from './map-view.js';
import axios from 'axios';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.createParty = this.createParty.bind(this);
    this.geoLocation = this.geoLocation.bind(this);
  };

  createParty() {
    var context = this;
    var location = navigator.geolocation.getCurrentPosition(function(position) {
  
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      axios.post('/api/parties', {
        latitude: latitude,
        longitude: longitude
      })
      .then(function(party){
        browserHistory.push('/party/?id=' + party.data.id);
      })
      .catch(function(error){
        console.log('Not able to POST the party: ', error);
      });

      context.setState({
        userLatitude: position.coords.latitude,
        userLongitude: position.coords.longitude
      })
    });
  };

  geoLocation() {
    var context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      context.setState({
        userLatitude: position.coords.latitude,
        userLongitude: position.coords.longitude
      });
    });
  };

  render() {
    return (
      <div className="verticalFlex card">
        <div className="horizontalFlex">
          <NavBar />
          <div className="horizontalFlex">
            <button onClick={this.createParty}>New Party</button>
          </div>
        </div>
        <div className="horizontalFlex">
          <MapView />
          <img src={'/static/images/headphones.png'}></img>
        </div>
      </div>
  )};

};

export default Map;