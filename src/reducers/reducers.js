import { combineReducers } from 'redux';

import shopping from './shopping';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  shopping,
  visibilityFilter,
});

export default rootReducer;
