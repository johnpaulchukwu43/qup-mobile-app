import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from '../screens/Authentication';
import OtpConfirmation from '../screens/OtpConfirmation';
const Stack = createStackNavigator();

const UnauthorizedContainer = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OtpConfirmation"
        component={OtpConfirmation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default UnauthorizedContainer;
