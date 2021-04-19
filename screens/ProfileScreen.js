import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  AsyncStorage
} from 'react-native';
import { Form, Item, Input, Label,Button } from 'native-base';
import { connect } from "react-redux";
import { homeActions } from './ducks';


export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male"
    };

    // this.handleSubmit=this.handleSubmit(bind)
  }

  componentDidMount(){
    this.getLoginDetails()
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.userDetails.data && (JSON.stringify(this.props.userDetails) !== JSON.stringify(prevProps.userDetails))){
      const { data } = this.props.userDetails
      this.setState({
        userDetails:this.props.userDetails,
        name: data && data.name,
        username:data && data.username,
        nic: data && data.nic,
        phone: data && data.phone
      })
    }
  }

  getLoginDetails = async () => {
    try {
      var userDetails = await AsyncStorage.getItem('userDetails');
      console.log('ProfileScreen ~ getUserDetails= ~ userDetails', userDetails);

      var userDetailsObj = JSON.parse(userDetails);
      console.log(
        'ProfileScreen ~ getUserDetails= ~ userDetailsObj',
        userDetailsObj,
      );

      this.props.getUserDetails({id: userDetailsObj.id});
      this.setState({userID:userDetailsObj.id})
    } catch (error) {
      console.log('ProfileScreen -> _retrieveData -> error', error);
      // Error retrieving data
    }
  };

  handleSubmit =()=>{
    console.log('ProfileScreen : state : ', this.state);
    // const {data} = this.props.loginDetails;

    let userDto = {
      username: this.state.username,
      name: this.state.name,
      nic: this.state.nic,
      phone: this.state.phone,
    };
    console.log('ProfileScreen ~ userDto', userDto);

    this.props.updateUserDetails({
      id: this.state.userID,
      userDto: userDto,
    });

  }

  render() {
    console.log("ProfilePage : props : ", this.props)
    console.log("ProfilePage : state : ", this.state)

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar1.png' }} />

            <Text style={styles.name}>
             {this.state.name}
                  </Text>
          </View>
        </View>

        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input 
             value={this.state.name}
             defaultValue={this.state.name}
             onChangeText={name => this.setState({name})}
            />
          </Item>
          <Item floatingLabel last>
            
            <Label>Email</Label>
            <Input 
            value={this.state.username}
            defaultValue={this.state.username}
            onChangeText={username => this.setState({username})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>NIC No</Label>
            <Input 
             value={this.state.nic}
             defaultValue={this.state.nic}
             onChangeText={nic => this.setState({nic})}
             />
          </Item>
          <Item floatingLabel last>
            <Label>Contact No</Label>
            <Input 
             value={this.state.phone}
             defaultValue={this.state.phone}
             onChangeText={phone => this.setState({phone})}/>
          </Item>

          <Button
              success
              style={{paddingLeft: 5, marginTop: 10, marginLeft: 10}}
              onPress={this.handleSubmit}>
              <Text>UPDATE</Text>
            </Button>

        </Form>

      </SafeAreaView>

    );
  }
}

const mapStateToProps = state => {
  return {
    userDetails:state.Home.userDetails
  };
};

export default connect(
  mapStateToProps,
  homeActions,
)(ProfileScreen);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox: {
    backgroundColor: "#DCDCDC",
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 22,
    color: "#696969",
  }
});