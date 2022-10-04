import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import SearchArea from "../../screens/search/SearchArea"
import {useScreenOptions} from "../../hooks";

const Stack = createStackNavigator();


const BottomNavTab2 = () => {
  const screenOptions = useScreenOptions();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search Area"
        options={screenOptions.searchAreaHeader}
        component={SearchArea}
      />

    </Stack.Navigator>
  );
};

export default BottomNavTab2;
