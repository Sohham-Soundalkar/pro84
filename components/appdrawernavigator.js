import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/settingscreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/notificationscreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: AppTabNavigator
    },
    MyDonations:{
        screen: MyDonationScreen
    },
    Notifications:{
        screen: NotificationScreen
    },
    Settings:{
        screen: SettingScreen
    }
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: 'Home'
})