import { combineReducers } from 'redux';
// we can change the name with "as" whatever you want
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  // key of form is required for use of reducer
  form: formReducer
})


