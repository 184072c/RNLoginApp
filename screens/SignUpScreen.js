import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {homeActions} from './ducks';
// const SignInScreen = ({navigation}) => {
class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nic: '',
      name: '',
      password: '',
      confirm_password: '',
      phone: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
      errMsgcontactNumber: '',
    };
  }

  emailHandler = val => {
    var pattEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (pattEmail.test(val)) {
      this.setState({
        email: val,
        check_emailInputChange: true,
      });
    } else {
      this.setState({
        email: val,
        check_emailInputChange: false,
        errMsgEmail: 'Invalid email',
      });
    }
  };

  nameHandler = val => {
    if (val.length >= 3) {
      this.setState({
        name: val,
        check_nameInputChange: true,
      });
    } else {
      this.setState({
        name: val,
        check_nameInputChange: false,
        errMsgName: 'Invalid name',
      });
    }
  };

  nicHandler = val => {
    var pattNIC = new RegExp(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/);
    if (pattNIC.test(val)) {
      this.setState({
        nic: val,
        check_nicInputChange: true,
      });
    } else {
      this.setState({
        nic: val,
        check_nicInputChange: false,
        errMsgNIC: 'Invalid NIC',
      });
    }
  };

  phoneNumberHandler = val => {
    var pattContactNumber = new RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    );
    if (pattContactNumber.test(val)) {
      this.setState({
        phone: val,
        check_phoneInputChange: true,
      });
    } else {
      this.setState({
        phone: val,
        check_phoneInputChange: false,
        errMsgcontactNumber: 'Invalid phone number',
      });
    }
  };

  handlePasswordChange = val => {
    if (val.length > 7) {
      this.setState({
        password: val,
        validPassword: true,
      });
    } else {
      this.setState({
        password: val,
        validPassword: false,
        errMsgPassword: 'Minimun character should be 8',
      });
    }
  };

  handleConfirmPasswordChange = val => {
    if (this.state.password === val) {
      this.setState({
        confirm_password: val,
        validConfirmPassword: true,
      });
    } else {
      this.setState({
        confirm_password: val,
        validConfirmPassword: false,
        errMsgConfirmPassword: 'Password mistmach',
      });
    }
  };

  updateSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };

  updateConfirmSecureTextEntry = () => {
    this.setState({
      confirm_secureTextEntry: !this.state.confirm_secureTextEntry,
    });
  };

  signUpHandler = () => {
    const user = {
      name: this.state.name,
      username: this.state.email,
      nic: this.state.nic,
      password: this.state.password,
      phone: this.state.phone,
    };
    //   const user ={
    //     username : "damitha2@gmail.com",
    //     name : "Damitha",
    //     nic : "964154788V",
    //     phone : "0719425245",
    //     password : "1qaz2wsx"
    //   }
    console.log('signUpHandler : user', user);
    this.props.register({user: user, navigation: this.props.navigation});
  };
  render() {
    const {
      phone,
      check_phoneInputChange,
      errMsgcontactNumber,
      password,
      validPassword,
      errMsgPassword,
      confirm_password,
      validConfirmPassword,
      errMsgConfirmPassword,
      nic,
      check_nicInputChange,
      errMsgNIC,
      name,
      check_nameInputChange,
      errMsgName,
      email,
      check_emailInputChange,
      errMsgEmail,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => this.emailHandler(val)}
              />
              {this.state.check_emailInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {email.length != 0 && !check_emailInputChange && (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>
                  {errMsgEmail}
                </Text>
              </View>
            )}
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Name"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => this.nameHandler(val)}
              />
              {this.state.check_nameInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {name.length != 0 && !check_nameInputChange && (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>
                  {errMsgName}
                </Text>
              </View>
            )}
            <Text style={styles.text_footer}>NIC</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your NIC"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => this.nicHandler(val)}
              />
              {check_nicInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {nic.length != 0 && !check_nicInputChange && (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>{errMsgNIC}</Text>
              </View>
            )}

            <Text style={styles.text_footer}>Phone</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Phone Number"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => this.phoneNumberHandler(val)}
              />
              {check_phoneInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>
            {phone.length != 0 && !check_phoneInputChange && (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>
                  {errMsgcontactNumber}
                </Text>
              </View>
            )}

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
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
            {password.length != 0 && !validPassword && (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>
                  {errMsgPassword}
                </Text>
              </View>
            )}
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}>
              Confirm Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirm Your Password"
                secureTextEntry={
                  this.state.confirm_secureTextEntry ? true : false
                }
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={val => this.handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={this.updateConfirmSecureTextEntry}>
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>

            {confirm_password.length != 0 && !validConfirmPassword && (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>
                  {errMsgConfirmPassword}
                </Text>
              </View>
            )}
            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By signing up you agree to our
              </Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Terms of service
              </Text>
              <Text style={styles.color_textPrivate}> and</Text>
              <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
                {' '}
                Privacy policy
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                disabled={
                  !(
                    this.state.check_emailInputChange &&
                    this.state.check_nameInputChange &&
                    this.state.check_nicInputChange &&
                    this.state.check_phoneInputChange &&
                    this.state.validPassword &&
                    this.state.validConfirmPassword
                  )
                }
                style={styles.signIn}
                onPress={() => {
                  this.signUpHandler();
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
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
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
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    );
  }
}

// export default SignUpScreen;
const mapStateToProps = state => {
  return {
    login: state.Home.login,
  };
};

export default connect(
  mapStateToProps,
  homeActions,
)(SignUpScreen);

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
    flex: Platform.OS === 'ios' ? 3 : 5,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
