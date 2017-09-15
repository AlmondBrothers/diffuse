import React from 'react';
import ReactDOM from 'react-dom';

//functional stateless attempt?

var Login = () => (
  <div className={"verticalFlex card"}>
    <img src={'/static/images/headphones.png'}></img>
    <div className={"verticalFlex"}>
      <input type="text" placeholder="username" name="username"></input>
      <input type="password" placeholder="password" name="password"></input>
    </div>
    <div>
      <input className={"button"} type="submit"  value="Submit"></input>
      <button className={"button"}><a href="/signup">Sign-Up</a></button>
    </div>
  </div>
)

module.exports = Login;
