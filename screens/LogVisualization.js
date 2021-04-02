import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogVisualizationScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Log Visualization Screen</Text>
       
      </View>
    );
};

export default LogVisualizationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
