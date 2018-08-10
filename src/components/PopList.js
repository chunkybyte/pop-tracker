import React from 'react';
import { connect } from 'react-redux';
import PopEntry from './PopEntry';

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

class PopListWrap extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         poplist: null
    //     }
    // }

    // componentDidMount() {
    //     // Fetching the Watched List of the User and Setting it on the State 
    //     fetch("https://demo3657198.mockable.io/getMovieList")
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({ poplist: res.data });
    //         })
    //         .catch(err => {
    //             console.error("There was some problem with the list fetching", err);
    //         });
    // }

    renderListing = (data) => {
        console.log(data);
        if(!data) {
           return <p>Loading...</p> 
        } else {
            return data.map((entry, i) => <PopEntry key={entry.imdbID} details={entry} />);
        }
    }

    render() {
        return (
            <div id="poplist-wrapper">
                <h3>Your Movie List</h3>
                <div id="poplisting">
                    {this.renderListing(this.props.data)}
                </div>
            </div>
        );
    }
}

const PopList = connect(mapStateToProps)(PopListWrap);

export default PopList;