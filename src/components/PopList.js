import React from 'react';
import PopEntry from './PopEntry';

class PopList extends React.Component {
    constructor() {
        super();
        this.state = {
            poplist: null
        }
    }

    componentDidMount() {
        // Fetching the Watched List of the User and Setting it on the State 
        fetch("https://demo3657198.mockable.io/getMovieList")
            .then(res => res.json())
            .then(res => {
                this.setState({ poplist: res.poplist });
            })
            .catch(err => {
                console.error("There was some problem with the list fetching", err);
            });
    }

    renderListing = (data) => {
        console.log(data);
        if(!data) {
           return <p>Loading...</p> 
        } else {
            return data.map((entry, i) => <PopEntry key={`popentry-${i}`} details={entry} />);
        }
    }

    render() {
        return (
            <div id="poplist-wrapper">
                <h3>Your Movie List</h3>
                <div style={{textAlign: 'center'}}>
                    {this.renderListing(this.state.poplist)}
                </div>
            </div>
        );
    }
}

export default PopList;