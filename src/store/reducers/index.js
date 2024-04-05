import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  reservation: bookingReducer,
});

export default rootReducer;
