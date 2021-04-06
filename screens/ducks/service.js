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



export default [login,register];