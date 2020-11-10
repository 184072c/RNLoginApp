import axios from 'axios';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// TODO: Replace this with actual JWT token from Keycloak
const id_token = 'secret';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// Create axios instance for api calls
var instance = null;
var jwt_token = null;

const _retrieveData = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return token;
    }
  } catch (error) {
    console.log('HTTPClient: Home -> _retrieveData -> error', error);
    // Error retrieving data
  }
};

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    console.log("token", token)
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const Token = async () => {
  try {
    await AsyncStorage.getItem('token').then(token => token);
  } catch (error) {
    return null;
  }
};

export const setAuth = async () => {
  var token = null;

  if (false) {
    instance = axios.create({
      baseURL: '',
      timeout: 40000,

      headers: {
        Authorization: 'Bearer ' + Token(),
        'Content-Type': 'application/json',
        // 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGFwcGFyZWxjb25uZWN0cy5jb20iLCJsYXN0X2xvZ2dlZF9hdCI6IjIwMTktMDYtMTVUMDk6NTA6MjcuOTk3NTY4KzA1OjMwIn19.Ps9sd6x5zFGjuttr9vXYCc4YGXiQOePlLYWSK8QuKuGjZSlbv7Uk6FeA_6LB0F66GT85Of5ThRaQVkn8Bxj0-8vWBh8pY_CY4zust34PyZgGzuYi8Bokrh9VDK3tZ9AnOFYl3CtZPtU7EyiTPSZktPD0EnMRQgSLH3RPXzTIXga_cOPIgF5PR2fmI9L59U4DKlgnu5p45gKTXHGUl-61_uo_84i9Cuh7uToi_CvLX0Kdni-rjHBwWRfUBWxgISdZg-KT8a7PgJQtIZ8AICUwJp2ZDjt09xiw5jqK8clydiKy0-ICHE82IXeYZH_GsSBKeZl3mA5_qut7DyArh0xYXQdiJacXg9JCn8OdW0At2oqNa4gbhxVKVAABxD4N2jAAPYh9pXgDLAwMhEL9vj2VSA2_eRjr4xga8GFJSMYcqutEv6fjpyWqkXt3CAr8VdbFi0_4N2oOeuIMM13ppfU6weOUrrKEYcpk5N8Tp9Nxzxyf0GZvcIlq7Njwg1uCbJKDVuBrwS2kcCeJ6OT2z_VXAgaRMstpRPBzKOLNS9NGUa2FznzTbxeMS_qLHafjhGLHxqcoZqt27QeB7_rPrItV4toWvRvNsBKSAUJDGf686LHW5H7VBwIFI11IUN8QQL_0QV8Jt-JRlT7T1Dkekueio5t4iMOErgQ0WVrrcZlhEqk'
      },
    });
  } else {
    instance = axios.create({
      baseURL: '',
      timeout: 40000,

      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  instance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      console.log("setAuth -> token", token)
      // const token =
      //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7ImlkIjozLCJlbWFpbCI6ImN1c3RvbWVyQGFwcGFyZWxjb25uZWN0cy5jb20iLCJsYXN0X2xvZ2dlZF9hdCI6IjIwMTktMTItMjZUMjA6NTU6NTguOTc2MzYwKzA1OjMwIn19.JwdOxAkXiN_njfygP9V6SbtqEm3Vffbh5zG_guDFyUpZShR0uWpzT05zrAigS7thXhT4VWFwRqcLCsSHEWnkQX7zV-dL8W1qOf5ZlkV-YSnb-Zn72QNmVoK-7lmUml3bDwxvD5VkMQUyJag_P4rmP6Uh1U3qiqM-pXoE5iKIZ3RF9rxtk_rsc3OhQ39ht1aOBWQ3K21B3WDAOhhLHG2H6MV3_wH_zDmQKrBInWcC86T9Rs4alhZGV6jHkqd3Jly70Qa885MEtg9371cf5XLCxAkfmJSCuiXzlOooalYoNgIG7YOjuxGpO27jzfq8uB-ibAqBELgjodLo-dVwgPowRcJbdZyJa_uHnxYe3IOpMHrFh2KJU1RQZ_ngysemTqcX7vOqiQ3lIiVvUoM-ZXnipYVt6edLr0ozuPZfdYjybDldyrCkLWDdOeJVaOnBFGGNZP8zTRy-e4tjoQsoO2K73D__srQ_C-IScnyIZBI_r6djl6Tgln12YCJOcZjjU2I6YBlINtiGmfXSbf7zHQU-pdGrflopI1HJ5YfmzgmybJPJwxgHe2OAqjIb-KqyvGvfo58hs-unI5AnfQI2YCAoYmg_c55IoUSPPbgqqAr4AABXhJxmZBXDyR85ziWjGXCwDs64oSrD4h0RJ0sY-r1esdR7jL451Ste3XTx1NwiU';
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      console.log("HTTPClient : err : ",error)
      return Promise.reject(error);
      // if (error.response.status === 401) {
      //   // localStorage.removeItem('jwt');
      //   // localStorage.removeItem('user');
      //   window.location = '/';
      // } else {
      //   return Promise.reject(error);
      // }
    },
  );
};

export const Get = (route, data) => {
  instance || setAuth();
  return instance.get(route, data);
};

export const Post = (route, data) => {
  instance || setAuth();
  return instance.post(route, JSON.stringify(data));
};

export const Put = (route, data) => {
  instance || setAuth();
  return instance.put(route, JSON.stringify(data));
  // return instance.put(route, data)
  // return instance.put(route, data == {} ? null : JSON.stringify(data))
};

export const Delete = (route, data) => {
  instance || setAuth();
  return instance.delete(route, {
    data: data,
  });
  // return instance.delete(route, JSON.stringify(data))
};

export const Patch = (route, data) => {
  instance || setAuth();
  return instance.patch(route, JSON.stringify(data));
};