import React from 'react';
import {View, ScrollView, Button, StyleSheet, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';
import {useTheme} from '@react-navigation/native';
import HomeCard from '../components/HomeCard';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  const viewLogFilesHandler = () => {
    navigation.navigate('LogFiles');
  };

  return (
    <ScrollView>
      <HomeCard
        header="View Log Files"
        description="You can sort and view log files"
        btnLabel="VIEW LOG FILES"
        onPressHandler={viewLogFilesHandler}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
