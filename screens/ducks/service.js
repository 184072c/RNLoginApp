import {createLogic} from 'redux-logic';
import actions from './actions';
import types from './types';
import endPoints from '../../util/EndPoint';
import * as API from '../../util/HTTPClient';
import AsyncStorage from '@react-native-community/async-storage';
import EndPoint from '../../util/EndPoint';

// const baseURL = "http://192.168.8.185:8085" 
const baseURL = "http://192.168.8.185:8085" 
tokenHandler = async ()=>{
  console.log("tokenHandler")
  try {
    await AsyncStorage.setItem('userToken', "userToken");
  } catch(e) {
    console.log(e);
  }
}


const login = createLogic({
  type: types.LOGIN,
  latest: true,
  debounce: 1000,

  process({MockHTTPClient, getState, action}, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }
    console.log("service : login : ", action.payload)

    HTTPClient.Post(EndPoint.login, action.payload.user )
      .then(res => {
        //here -> navigate home
        action.payload.navigation.navigate('HomeDrawer')
        console.log("service : login : res ", res)
        // this.tokenHandler()
        dispatch(actions.loginSuccess(res.data));
      })
      .catch(err => {
        // this.tokenHandler()
        console.log("service : login : err ", err)
        dispatch(actions.loginFail(err));
      })
      .then(() => done());
  },
});

const register = createLogic({
  type: types.REGISTER,
  latest: true,
  debounce: 1000,

  process({MockHTTPClient, getState, action}, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }

    HTTPClient.Post(EndPoint.signup, action.payload)
      .then(res => {
        console.log("register :res",res)
        dispatch(actions.registerSuccess(res.data));
        // dispatch(actions.getProduct(action.payload));
      })
      .catch(err => {
        console.log("register :err",err)

        dispatch(actions.registerFai(err));
      })
      .then(() => done());
  },
});

const getUserDetails = createLogic({
  type: types.GET_USER_DETAILS,
  latest: true,
  debounce: 1000,

  process({MockHTTPClient, getState, action}, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }

    HTTPClient.Get(EndPoint.getUserDetails+`/${action.payload.id}`)
      .then(res => {
        console.log("GET_USER_DETAILS :res",res)
        dispatch(actions.getUserDetailsSuccess(res.data))
      })
      .catch(err => {
        console.log("GET_USER_DETAILS :err",err)

        dispatch(actions.getUserDetailsFail(err));
      })
      .then(() => done());
  },
});

const updateUserDetails = createLogic({
  type: types.UPDATE_USER_DETAILS,
  latest: true,
  debounce: 1000,

  process({MockHTTPClient, getState, action}, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }

    HTTPClient.Put(EndPoint.getUserDetails+`/${action.payload.id}`, action.payload.userDto)
      .then(res => {
        console.log("UPDATE_USER_DETAILS :res",res)
        dispatch(actions.updateUserDetailsSuccess(res.data))
      })
      .catch(err => {
        console.log("UPDATE_USER_DETAILS :err",err)

        dispatch(actions.updateUserDetailsFail(err));
      })
      .then(() => done());
  },
});

const getLogFiles = createLogic({
  type: types.GET_LOG_FILES,
  latest: true,
  debounce: 1000,

  process({MockHTTPClient, getState, action}, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }

    HTTPClient.Get(EndPoint.getLogFiles)
      .then(res => {
        console.log("GET_LOG_FILES :res",res)
        dispatch(actions.getLogFilesSuccess(res.data))
      })
      .catch(err => {
        console.log("GET_LOG_FILES:err",err)

        dispatch(actions.getLogFilesFail(err));
      })
      .then(() => done());
  },
});


export default [login,register, getUserDetails ,updateUserDetails, getLogFiles];