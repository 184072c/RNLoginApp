import React from 'react';
import { View,  Button, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { useTheme } from '@react-navigation/native';

const HomeCard = ({navigation, header, description, btnLabel, onPressHandler}) => {
  
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>{header}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                {description}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            {/* <Button>
            <Text>{btnLabel}</Text>

            </Button> */}
            <Button
                onPress={onPressHandler}
                title={btnLabel}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
          </CardItem>
        </Card>
      </Content>
    );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
