import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useScreenOptions} from "../../hooks";
import ExtraMenu from "../../screens/ExtraMenu";
const Stack = createStackNavigator();

const BottomNavTab4 = () => {

  const screenOptions = useScreenOptions();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={ExtraMenu}
        options={screenOptions.settingsHeader}
      />

    </Stack.Navigator>
  );
};

export default BottomNavTab4;
