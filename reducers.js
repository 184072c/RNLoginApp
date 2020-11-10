// Reducers: combine all reducers of the app
import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

import home from './screens/ducks'

const reducers = combineReducers({
  form: reduxFormReducer,
  Home: home,

});
export default reducers;