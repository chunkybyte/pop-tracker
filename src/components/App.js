import React from 'react';
import Header from './Header';
import PopList from './PopList';

class App extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <Header />
                <PopList />
            </div>
        );
    }
}

export default App;