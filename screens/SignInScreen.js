import React, {Component} from 'react';
// import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {login} from './ducks/actions';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {homeActions} from './ducks';
import {useTheme} from 'react-native-paper';
import axios from 'axios';
import {AuthContext} from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';

import Users from '../model/users';
// const { signIn } = React.useContext(AuthContext);

// const SignInScreen = ({navigation}) => {
class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
    };
  }

  textInputChange = val => {
    // console.log("textInputChange : val :",val)
    var pattEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (pattEmail.test(val)) {
      this.setState({
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      this.setState({
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  handlePasswordChange = val => {
    if (val.trim().length > 7) {
      this.setState({
        password: val,
        isValidPassword: true,
      });
    } else {
      this.setState({
        password: val,
        isValidPassword: false,
      });
    }
  };

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  handleValidUser = val => {
    if (val.trim().length >= 4) {
      this.setState({
        isValidUser: true,
      });
    } else {
      this.setState({
        isValidUser: false,
      });
    }
  };

  loginHandle = async (email, password) => {
    console.log('loginHandle: email : ', email);
    console.log('loginHandle:password: ', password);

    let user = {
      username: email,
      password: password,
    };
    // let user = {
    //     username: "damitha@gmail.com",
    //     password: "1qaz2wsx"
    //   }

    // call login api
    this.props.login({user: user, navigation: this.props.navigation});
    //    this.props.navigation.navigate('HomeDrawer')
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[
            styles.footer,
            {
              // backgroundColor: colors.background
              backgroundColor: '#ffffff',
            },
          ]}>
          <Text
            style={[
              styles.text_footer,
              {
                // color: colors.text
                color: '#000000',
              },
            ]}>
            Email
          </Text>

          <View style={styles.action}>
            {/* //user icon */}
            <FontAwesome name="user-o" color="#000000" size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: '#000000',
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => this.textInputChange(val)}
              onEndEditing={e => this.handleValidUser(e.nativeEvent.text)}
            />
            {this.state.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {this.state.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>invalid email</Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: '#000000',
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#000000" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={this.state.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: '#000000',
                },
              ]}
              autoCapitalize="none"
              onChangeText={val => this.handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={this.updateSecureTextEntry}>
              {this.state.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {this.state.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <TouchableOpacity>
            <Text style={{color: '#009387', marginTop: 15}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              disabled={!(this.state.isValidUser && this.state.isValidPassword)}
              style={styles.signIn}
              onPress={() => {
                this.loginHandle(this.state.username, this.state.password);
              }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUpScreen')}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#009387',
                  },
                ]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

// export default SignInScreen;
const mapStateToProps = state => {
  console.log('SignInScreen : state : ', state);
  return {
    login: state.Home.login,
  };
};

export default connect(
  mapStateToProps,
  homeActions,
)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
