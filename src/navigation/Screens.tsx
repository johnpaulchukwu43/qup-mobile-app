import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  About,
  Agreement,
  Home,
  Notifications,
  Privacy,
  Profile,
  Register,
  Login,
  Settings,
  NotificationsSettings,
} from '../screens';

import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: t('navigation.settings'), ...screenOptions.profile}}
      />
      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettings}
        options={{title: t('navigation.notifications'), ...screenOptions.back}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{title: t('navigation.notifications'), ...screenOptions.back}}
      />
      <Stack.Screen
        name="Agreement"
        component={Agreement}
        options={{title: t('navigation.agreement'), ...screenOptions.back}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{title: t('navigation.about'), ...screenOptions.back}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{title: t('navigation.privacy'), ...screenOptions.back}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};
