import React from 'react';
import { connect } from 'react-redux';
import { addPopItem } from '../actions/index';
import AddModal from './AddModal';

const mapDispatchToProps = (dispatch) => ({
    addPopItem: popItem => dispatch(addPopItem(popItem))
});

class SearchResultWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false,
            showPopup: false
        }
    }
    
    addToListPopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    closeModal = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    addToList = (newItem) => {
        if (!this.state.added) {
            alert('Item Added');
            this.props.addPopItem(newItem);
            this.setState({
                added: !this.state.added,
                showPopup: !this.state.showPopup
            });
        } else {
            alert('Item Already exists in your list');
            this.setState({
                showPopup: !this.state.showPopup
            });
        }
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
                <button className="addToMyList" style={this.state.added ? {justifyContent:"center"} : {justifyContent:"flex-start"}} onClick={() => { this.addToListPopup(); }}>
                    {this.state.added ? 
                        <React.Fragment>Added to Your List.</React.Fragment> 
                        : 
                        <React.Fragment><span className="plusSymbol">+</span>Add To My List</React.Fragment>}
                </button>
                {this.state.showPopup ? <AddModal details={this.props.details} closeModal={this.closeModal} addToList={this.addToList} /> : ''}
            </div>
        );
    }
}

const SearchResult = connect(null, mapDispatchToProps)(SearchResultWrap);

export default SearchResult;