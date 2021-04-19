import React, { Component} from 'react';
import { View,  Button, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { homeActions } from './ducks';


class LogFilesScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getLogFiles()
  }


  render() {
    console.log("LogFilesScreen : props : ", this.props)
    console.log("LogFilesScreen : state : ", this.state)
    const {data} = this.props.logFiles;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.container}>
            {data &&
              data.map((file, i) => {
                return (
                  <Card key={file._id}>
                    <CardItem header>
                      <Text>Log File #{i + 1}</Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                          <Text>File Name : {file.fileName}</Text>
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer>
                      <Text>Date : {file.date}</Text>
                    </CardItem>
                  </Card>
                );
              })}
          </View>

        </ScrollView>
      </SafeAreaView>

    );
  }
}



const mapStateToProps = state => {
  return {
    logFiles:state.Home.logFiles
  };
};

export default connect(
  mapStateToProps,
  homeActions,
)(LogFilesScreen);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
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
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
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
    color: '#696969',
  },
  bodyContent: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    elevation: 4,
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 22,
    color: '#696969',
  },
});
