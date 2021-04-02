import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PredictedPlotScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Predicted Plot Screen</Text>
      
      </View>
    );
};

export default PredictedPlotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
