import React, { Component} from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView } from 'react-native';
import { connect } from "react-redux";
import { homeActions } from './ducks';


class LogFilesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male"
    };

  }

  componentDidMount(){
    // this.getLoginDetails()
  }


  render() {
    console.log("LogFilesScreen : props : ", this.props)
    console.log("LogFilesScreen : state : ", this.state)

    return (
      <SafeAreaView style={styles.container}>
        <Text>Log Files Screen</Text>
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
)(LogFilesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
