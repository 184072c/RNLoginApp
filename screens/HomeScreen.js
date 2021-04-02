import React from 'react';
import { View,ScrollView,  Button, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { useTheme } from '@react-navigation/native';
import HomeCard from '../components/HomeCard';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

  const viewLogFilesHandler=()=>{
    navigation.navigate("LogFiles")
  }
  
  const logsVisualizationHandler=()=>{
    navigation.navigate("LogVisualization")
  }


    return (
      <ScrollView>
        <HomeCard 
          header="View Log Files"
          description="You can sort and view log files"
          btnLabel="VIEW LOG FILES"
          onPressHandler={viewLogFilesHandler}
        />

        <HomeCard 
          header="Logs Visualization"
          description="Analyze abd view logs using charts"
          btnLabel="LOGS VISUALIZATION"
          onPressHandler={logsVisualizationHandler}
        />

     </ScrollView>
      // <View style={styles.container}>
      //   <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
      //   <Text style={{color: colors.text}}>Home Screen</Text>
      // <Button
      //   title="Go to details screen"
      //   onPress={() => navigation.navigate("Details")}
      // />
      // </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
