import { ADD_POPITEM } from '../actions/action-types';

const initialState = {
    data: [

    ]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POPITEM: 
            return { ...state, data: [ ...state.data, action.payload]};
        default:
            return state;
    }
}

export default rootReducer;