import React from 'react';
import ReactDOM from 'react-dom';
import Song from './Song.js';

var Playlist = (props) => (
  <div>
    <ul className='list-group'>
      {props.data.map(function(datum, i) {
        return (
          <Song key = {i} datum={datum} index={i} handlePlay={props.handlePlay} handleRemove={props.handleRemove} />
        );
      })}
    </ul>
  </div>
)

module.exports = Playlist;
