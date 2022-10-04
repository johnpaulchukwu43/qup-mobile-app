import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import {useScreenOptions} from "../../hooks";
import ReservationArea from "../../screens/reservations/ReservationArea"
import ReservationDetail from "../../screens/reservations/ReservationDetail";
const Stack = createStackNavigator();

const BottomNavTab3 = () => {

  const screenOptions = useScreenOptions();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reservations"
        options={screenOptions.reservationsHeader}
        component={ReservationArea}
      />

      <Stack.Screen
        name="ReservationDetails"
        options={screenOptions.reservationDetailsHeader}
        component={ReservationDetail}
      />

    </Stack.Navigator>
  );
};

export default BottomNavTab3;
