import React from 'react';

class SearchPop extends React.Component {
    giveResults = (inp) => {
        if (inp.length >= 3) {
            console.log(inp);
            fetch(`http://www.omdbapi.com/?apikey=4aaf9e6a&t=${inp}&plot=short&r=json`)
                .then(res => res.json())
                .then(res => {
                    this.render(res);
                });
        }
    }

    renderResult = (res) => {
        if (res) {
            console.log('renderResult');
            console.log(res);
            return (
                <div id="searchResult">
                    <div className="resultImg">
                        <img src={res.Poster} alt={res.Title}/>
                    </div>
                    <div>
                        <h4>
                            {res.Title}
                        </h4>
                    </div>
                </div>
            );
        } else {
            console.log('No Result to Show');
            return <div>Nothing</div>;
        }
    }

    render(res) {
        if(res) {
            return this.renderResult(res);
        } else {
            return (
                <div id="searchBox">
                    <h3>Search Movies, TV</h3>
                    <input type="text" name="search" id="searchArea" placeholder="Start typing the name of the show, movies, etc you're searching..." onInput={(e) => {this.giveResults(e.target.value)}} />
                    {res ? this.renderResult(res) : <div>Nothing</div>}
                </div>
            );
        }
    }
}

export default SearchPop;