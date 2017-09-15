import React from 'react';
import ReactDOM from 'react-dom';
import Song from './Song.js'

var SongList = (props) => (
	<div className="horizontalFlex list" id="playlist">
      <ul>
        {props.data.map(function(datum, i) {
          return (
            <Song key = {i} datum={datum} index={i} handlePlay={props.handlePlay} handleRemove={props.handleRemove} />
          );
        })}
      </ul>		
	</div>
)
 // <Playlist data={props.data} handlePlay={props.handlePlay} handleRemove={props.handleRemove} /> previously took the place of ul
module.exports = SongList;
