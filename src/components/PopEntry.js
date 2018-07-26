import React from 'react';
import PropTypes from 'prop-types';

class PopEntry extends React.Component {
    propType = {
        details: PropTypes.object
    }

    render() {
        const { title, type, startYear, endYear, status, rating } = this.props.details;

        return (
            <div className="pop-entry-item">
                <div className="popentry-info">
                    <div>
                        <strong>
                            {title}
                        </strong>
                        &nbsp;
                        <em className="popentry-timeline">({startYear} - {(endYear === null ? 'Present' : endYear)})</em>
                    </div>
                    <div className="popentry-item-about">
                        <span className="popentry-type-badge">{type}</span>
                        <span className={"popentry-type-badge " + (status === 'completed' ? "badge-complete" : "badge-ongoing")}>{status}</span>
                    </div>
                    <div className="popentry-item-rating">
                        Rated : {rating} / 10
                    </div>
                </div>
                <div className="popentry-personal-info">
                    <div>
                        Status : 
                        <select className="popentry-viewstatus">
                            <option value="watching">Watching</option>
                            <option value="watched">Watched</option>
                            <option value="following">Following</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopEntry;