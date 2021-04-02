import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogFilesScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Log Files Screen</Text>
      
      </View>
    );
};

export default LogFilesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
