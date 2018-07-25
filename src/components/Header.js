import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <header className="logo">
                <span>Aloo Parantha</span><br/>
                <span>the one app to track them all</span>
            </header>
        );
    }
}

export default Header;