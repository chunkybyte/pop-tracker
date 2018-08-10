import React from 'react';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProgress: 'incomplete'
        }
        this.ratingRef = React.createRef();
    }

    handleProgressChange = (e) => {
        this.setState({
            selectedProgress: e.target.value 
        });
    }

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
                            <div className="addModalBody">
                                <p>
                                    Are you watching this or completed?
                                </p>
                                <div>
                                    <input type="radio" value="incomplete" name="itemProgress" 
                                        checked={this.state.selectedProgress === 'incomplete'} 
                                        onChange={(e) => {this.handleProgressChange(e)}} />
                                    <label htmlFor="incomplete">In Progress / Want to watch</label>
                                </div>
                                <div>
                                    <input type="radio" value="complete" name="itemProgress" 
                                        checked={this.state.selectedProgress === 'complete'} 
                                        onChange={(e) => {this.handleProgressChange(e)}} />
                                    <label htmlFor="complete">Completed</label>
                                </div>
                                <br/>
                                <label htmlFor="personalRating">Rate this {data.Type} : </label>
                                <input ref={this.ratingRef} className="inpField" placeholder="On a scale of 10, how good was it?" type="number" name="personalRating" step="1" min="1" max="10" />

                            </div>
                        </div>
                    </div>
                    <button className="btn addItemBtn" onClick={() => {this.props.addToList({
                        ...data,
                        "personalRating": this.ratingRef.current.value,
                        "watchProgress": this.state.selectedProgress
                        })}}>
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