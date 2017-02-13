import React from 'react';
import ReactDOM from 'react-dom';

// Imported Components
import SearchSong from './SearchSong.js';

var SearchResults = (props) => (
	<div>
		<h3 className="search-title">Search Results</h3>
		<ul className='list-group'>
			{props.searchResults.map(function(song, i) {
				return (
					<SearchSong key = {i} index={i} song={song} handleSearchClicks={props.handleSearchClicks}/>
				)
			})}
		</ul>
	</div>
)

module.exports = SearchResults;
