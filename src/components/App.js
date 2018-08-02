import React from 'react';
import Header from './Header';
import PopList from './PopList';
import SearchOMDB from './SearchOMDB';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mylist: {}
        }
    }

    render() {
        return (
            <div className="main-wrapper">
                <Header />
                <SearchOMDB />
                <PopList />
            </div>
        );
    }
}

export default App;