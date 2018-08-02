import React from 'react';
import Header from './Header';
import PopList from './PopList';
import SearchPop from './SearchPop';

class App extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <Header />
                <SearchPop />
                <PopList />
            </div>
        );
    }
}

export default App;