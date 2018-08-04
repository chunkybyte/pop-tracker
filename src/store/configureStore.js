import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

import data from './sample/my-list';

const defaultState = {
    data
}

const store = createStore(rootReducer, defaultState);