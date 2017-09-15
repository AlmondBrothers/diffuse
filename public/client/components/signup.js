import React from 'react';
import ReactDOM from 'react-dom';

// Imported Components
import MapView from './map-view.js';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: 'calculating latitude...',
      longitude: 'calculating longitude...'
    };
    this.createUser = this.createUser.bind(this);
  };

  createUser() {
    var context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      context.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
    });
  };

  render() {
    const latitude = parseInt(this.state.latitude).toFixed(2);
    const longitude = parseInt(this.state.longitude).toFixed(2);
    return(
      <div className={"verticalFlex card"}>
        <img src={'/static/images/headphones.png'}></img>
        <div className={"horizontalFlex"}>
          <MapView />
          <form name="signup" method="POST" action="/signup">
            <input type="text" placeholder="username" name="username" /><br/>
            <input type="password" placeholder="password" name="password" /><br/>
            <input type="text" placeholder={latitude} name="latitude" value={latitude} readOnly /><br/>
            <input type="text" placeholder={longitude} name="longitude" value={longitude} readOnly /><br/>
            <input className={"button"} type="submit"  value="Submit"></input>
            <button className={"button"}><a href="/login">Login</a></button>
          </form>
        </div>
      </div>
  )};

  componentDidMount() {
    this.createUser()
  };
};

export default Signup;


