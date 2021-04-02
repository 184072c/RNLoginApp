import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Details Screen</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        /> */}

      <View>
        <Image
          style={styles.noNotifyImg}
          source={require("../assets/no_notification_background_img.png")}
        />
        <Text style={styles.noNotifyTxt}>No Notification yet!</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noNotifyImg: {
    width: 150,
    height: 150,
  },
  noNotifyTxt: {
    fontWeight: '700',
    paddingLeft: 15,
    color: '#616161',
  },
});
