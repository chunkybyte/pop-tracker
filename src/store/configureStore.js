import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';

import data from '../sample/my-list';

const initialState = {
    data
}

const store = createStore(rootReducer, initialState);

export default store;