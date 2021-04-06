// const base_url = 'http://127.0.0.1:8080/';
const base_url = 'http://192.168.8.185:8080/';

export default {
  login: base_url + 'api/auth/signin',
  signup: base_url + 'api/auth/signup',
  getUserDetails: base_url + 'api/auth',
  getLogFiles: base_url + 'api/auth/file',
};
