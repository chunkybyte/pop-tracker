import React from 'react';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false
        }
    }
    
    addToList = (newItem) => {
        alert('Item Added');
        console.log('Item Added');
        console.log(newItem);
        this.setState({
            added: !this.state.added
        });
    }

    render() {
        let data = this.props.details;
        if (data.Response === "NAN") {
            console.log('Null');
            return (
                <div id="searchResult" style={{justifyContent:"center"}}>
                    No Result Found!
                </div>
            )
        }
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
                        Type : <span style={{textTransform:"capitalize"}}>{data.Type}</span> <br/>
                        Country : {data.Country} <br/>
                        {data.Type === 'series' ? `Seasons : ${data.totalSeasons}` : `Runtime : ${data.Runtime}`}<br/>
                    </p>
                </div>
                <button className="addToMyList" style={this.state.added ? {justifyContent:"center"} : {justifyContent:"flex-start"}} onClick={() => { this.addToList(data); }}>
                    {this.state.added ? 
                        <React.Fragment>Added to Your List.</React.Fragment> 
                        : 
                        <React.Fragment><span className="plusSymbol">+</span>Add To My List</React.Fragment>}
                </button>
            </div>
        );
    }
}

export default SearchResult;