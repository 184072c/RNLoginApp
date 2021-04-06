import types from './types';
import {handleActions} from 'redux-actions';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {basicState} from '../../util/constant';

const initialState = {
  login: {
    loading: true,
    pending: false,
    hasError: false,
    jwt: null,
  },
  signUp: {
    ...basicState,
  },
  logout: {
    ...basicState,
  },
};

const _storeData = async payload => {
  console.log('_storeData ~ payload', payload);
  try {
    await AsyncStorage.setItem('token', payload.accessToken);
    await AsyncStorage.setItem('role', payload.roles[0]);
    await AsyncStorage.setItem('id', payload.id);
    await AsyncStorage.setItem('nic', payload.nic);
    await AsyncStorage.setItem('userDetails', JSON.stringify(payload));
    // await AsyncStorage.setItem('profilePic', payload.user && payload.user.img);
    console.log('TCL: _storeData -> Done ');
  } catch (error) {
    console.log('TCL: _storeData -> error', error);
    // Error saving data
  }
};

const _removeData = async () => {
  try {
    AsyncStorage.clear();
    // var userDetails = await AsyncStorage.getItem('userDetails');
  } catch (error) {
    console.log('TCL: _removeData -> error', error);
    // Error removing data
  }
};
export default handleActions(
  {
   
    [types.LOGIN]: (state, {payload}) => {
      return {
        ...state,
        loading: true,
        login: {
          ...state.login,
          pending: true,
        },
      };
    },
    [types.LOGIN_SUCCESS]: (state, {payload}) => {
     console.log("home : reducer : LOGIN_SUCEESS : ", payload)
     _storeData(payload);

      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          data: payload,
          pending: false,
        },
      };
    },
    [types.LOGIN_FAIL]: (state, {payload}) => {
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          hasError: true,
          pending: false,
          data: payload,
        },
      };
    },
    //--------------------------------------------------------------
    [types.SIGN_UP]: (state, {payload}) => {
      // _storeData(payload);

      return {
        ...state,
        signUp: {
          ...state.signUp,
          pending: true,
        },
      };
    },
    [types.SIGN_UP_SUCCESS]: (state, {payload}) => {
      // _storeData(payload);

      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: false,
          pending: false,
          data: payload,
        },
      };
    },
    [types.SIGN_UP_FAIL]: (state, {payload}) => {
      return {
        ...state,
        signUp: {
          ...state.signUp,
          loading: false,
          hasError: true,
          pending: false,
          error: {payload},
        },
      };
    },
    //------------------------------------------------------------------------
    // [types.LOGOUT]: (state, {payload}) => {
    //   _removeData();

    //   return {
    //     ...state,
    //     logout: {
    //       ...state.logout,
    //       pending: true,
    //     },
    //   };
    // },
    // [types.LOGOUT_SUCCESS]: (state, {payload}) => {
    //   _removeData();

    //   return {
    //     ...state,
    //     logout: {
    //       ...state.logout,
    //       loading: false,
    //       pending: false,
    //       data: payload,
    //     },
    //   };
    // },
    // [types.LOGOUT_FAIL]: (state, {payload}) => {
    //   return {
    //     ...state,
    //     logout: {
    //       ...state.logout,
    //       loading: false,
    //       hasError: true,
    //       pending: false,
    //       error: {payload},
    //     },
    //   };
    // },
  },
  initialState,
);