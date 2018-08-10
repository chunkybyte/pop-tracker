import React from 'react';
import PropTypes from 'prop-types';

class PopEntry extends React.Component {
    propType = {
        details: PropTypes.object
    }

    render() {
        const { Title, Type, Year, personalRating, Poster, Rated, Country, Genre, imdbRating, watchProgress } = this.props.details;

        return (
            <div className="pop-entry-item">
                <div className="popentry-info">
                    <div className="popentry-img">
                        <img src={Poster === 'N/A' ? "https://dummyimage.com/150x150/f5f5f5/0919f0&text=Poster+Unavailable" : Poster} alt={Title} />
                    </div>
                    <div className="popentry-desc">
                        <p>
                            <strong>{Title}</strong>
                            &nbsp;
                            <em className="popentry-timeline">({Year})</em>
                        </p>
                        <p className="popentry-item-about">
                            <span className="popentry-type-badge" style={{textTransform:"capitalize"}}>{Type}</span>
                            {Country === 'N/A' ? '' : <span className="popentry-type-badge">{Country}</span>}
                            {Rated === 'N/A' ? '' : <span className="popentry-type-badge">Rated : {Rated}</span>}
                        </p>
                        <p className="popentry-subtext">
                            <strong>Genre</strong> : {Genre}<br/>
                            <strong>IMDB Rating</strong> : {imdbRating === 'N/A' ? 'Unrated' : `${imdbRating} / 10`}<br/>
                        </p>
                        <p className="popentry-item-rating">
                            Your Rating : {personalRating} / 10
                        </p>
                        <div className="popentry-personal-info">
                            <div>
                                Status : <span style={{textTransform:"capitalize"}}>{watchProgress}</span>
                                {/* <select className="popentry-viewstatus">
                                    <option value="watching">Watching</option>
                                    <option value="watched">Watched</option>
                                    <option value="following">Following</option>
                                </select> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopEntry;