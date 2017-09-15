import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults';
import SearchSong from './SearchSong.js';
import SearchBar from './SearchBar.js';

var Search = (props) => (
  <div className="horizontalFlex list" id="searchResults">
    <ul>
      {props.searchResults.map(function(song, i) {
        return (
          <SearchSong key = {i} index={i} song={song} handleSearchClicks={props.handleSearchClicks}/>
        )
      })}
    </ul>
  </div>
)

module.exports = Search;
