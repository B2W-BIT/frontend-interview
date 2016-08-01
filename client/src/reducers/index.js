import { combineReducers } from 'redux';
import timeline from './timeline';
import profile from './profile';

const rootReducer = combineReducers({timeline, profile});

export default rootReducer;
