import React from 'react';

class SearchPop extends React.Component {
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

    renderResult = () => {
        let data = this.state.searchResult;
        if (data.Response === "NAN") {
            console.log('Null');
            return (
                <div id="searchResult" style={{justifyContent:"center"}}>
                    No Result Found!
                </div>
            )
        }
        console.log('renderResult data');
        console.log(data);

        return (
            <div id="searchResult">
                <div className="resultImg">
                    <img src={data.Poster === 'N/A' ? "https://dummyimage.com/150x150/f5f5f5/0919f0&text=Poster+Unavailable" : data.Poster} alt={data.Title}/>
                </div>
                <div className="resultInfo">
                    <strong>
                        {data.Title} <i>({data.Year})</i>
                    </strong>
                    <p>
                        Starring : {data.Actors} <br/>
                        Rated : {data.imdbRating === 'N/A' ? "Unrated" : `${data.imdbRating} / 10`} <br/>
                        Runtime : {data.Runtime} <br/>
                        Country : {data.Country} <br/>
                    </p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="searchBox">
                <h3>Search Movies, TV</h3>
                <input type="text" name="search" id="searchArea" placeholder="Start typing the name of the show, movies, etc you're searching..." onInput={(e) => {this.giveResults(e.target.value)}} />
                {this.state.searchResult == null ? "" : this.renderResult()}
            </div>
        );
    }
}

export default SearchPop;