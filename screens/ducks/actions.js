import {createAction} from 'redux-actions';
import types from './types';

export default {
 login: createAction(types.LOGIN),
 loginSuccess: createAction(types.LOGIN_SUCCESS),
 loginFail: createAction(types.LOGIN_FAIL),

 register: createAction(types.REGISTER),
 registerSuccess: createAction(types.REGISTER_SUCCESS),
 registerFail: createAction(types.REGISTER_FAIL),

 getUserDetails: createAction(types.GET_USER_DETAILS),
 getUserDetailsSuccess: createAction(types.GET_USER_DETAILS_SUCCESS),
 getUserDetailsFail: createAction(types.GET_USER_DETAILS_FAIL),

 updateUserDetails: createAction(types.UPDATE_USER_DETAILS),
 updateUserDetailsSuccess: createAction(types.UPDATE_USER_DETAILS_SUCCESS),
 updateUserDetailsFail: createAction(types.UPDATE_USER_DETAILS_FAIL),

 getLogFiles: createAction(types.GET_LOG_FILES),
 getLogFilesSuccess: createAction(types.GET_LOG_FILES_SUCCESS),
 getLogFilesFail: createAction(types.GET_LOG_FILES_FAIL),





  
};