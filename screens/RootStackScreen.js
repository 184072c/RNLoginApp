import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import MainTabScreen from './MainTabScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import BookmarkScreen from './BookmarkScreen';
import { DrawerContent } from './DrawerContent';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
       {/* // <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        //<RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        //<RootStack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
        <RootStack.Screen name="HomeDrawer" component={MainTabScreen}/>
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator> */}
    </RootStack.Navigator>
);

export default RootStackScreen;