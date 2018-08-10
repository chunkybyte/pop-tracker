import React from 'react';
import SearchResult from './SearchResult';

class SearchOMDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: null
        };
    }

    giveResults = (inp) => {
        if (inp.length === 0) {
            this.setState({
                searchResult: null
            })
        }

        if (inp.length >= 3) {
            console.log(inp);
            fetch(`http://www.omdbapi.com/?apikey=4aaf9e6a&t=${inp}&plot=short&r=json`)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.Response === 'False') {
                        res = {
                            Response: "NAN"
                        };
                    }
                    this.setState({
                        searchResult: res
                    });
                });
        }
    }

    render() {
        return (
            <div id="searchBox">
                <h3>Search Movies, TV</h3>
                <input type="text" name="search" id="searchArea" placeholder="Start typing the name of the show, movies, etc you're searching..." onInput={(e) => {this.giveResults(e.target.value)}} />
                
                {this.state.searchResult == null ? "" : <SearchResult itemId={this.state.searchResult.imdbID} details={this.state.searchResult} />}
            </div>
        );
    }
}

export default SearchOMDB;