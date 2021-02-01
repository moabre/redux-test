import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  bookstore: bookReducer,
  modal: modalReducer,
});

export default rootReducer;
