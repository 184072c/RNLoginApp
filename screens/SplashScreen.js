import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {homeActions} from './ducks';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getUserToken();
  }

  getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token : ', token);
      if (token) {
        console.log('token : ', token);

        this.props.navigation.navigate('HomeDrawer');
      }
    } catch (error) {
      console.log('token : err');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../assets/kbsl.jpg')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View
          style={[
            styles.footer,
            {
              backgroundColor: '#ffffff',
            },
          ]}
          animation="fadeInUpBig">
          <Text
            style={[
              styles.title,
              {
                color: '#333333',
              },
            ]}>
            Stay connected with everyone!
          </Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('SplashScreen : state : ', state);
  return {
    login: state.Home.login,
  };
};

export default connect(
  mapStateToProps,
  homeActions,
)(SplashScreen);

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
