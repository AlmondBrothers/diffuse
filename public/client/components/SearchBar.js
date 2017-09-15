import React from 'react';
import ReactDOM from 'react-dom';


var SearchBar = (props) => (
	<form onSubmit={props.getYoutubeSong}>
    <div className={"horizontalFlex searchbar"}>
  		<input type='text' placeholder="Add a song to the playlist!" onChange={props.handleChange}/><br />
  		<input className={"button"} type='submit' value='Search'/>
    </div>
	</form>

)

module.exports = SearchBar
