import React from 'react';

class AddModal extends React.Component {
    render() {
        let data = this.props.details;

        return(
            <div className="modalBackDrop">
                <div className="modal">
                    <h3>Adding {data.Title} to Your List</h3>
                    <div id="searchResult" style={{border:"none"}}>
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
                    </div>
                    <button className="btn addItemBtn" onClick={() => {this.props.addToList(data)}}>
                        Add this to My List
                    </button>
                    <button className="btn cancelItemBtn" onClick={this.props.closeModal}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

export default AddModal;