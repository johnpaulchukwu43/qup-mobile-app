import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../../screens/Home";
import {useData, useScreenOptions, useTheme, useTranslation} from "../../hooks";
import {Block, Text, Image} from "../../components";
import {useNavigation} from "@react-navigation/core";
const Stack = createStackNavigator();

const BottomNavTab1 = () => {

  const {t} = useTranslation();
  const screenOptions = useScreenOptions();
  const {icons} = useTheme();

  const HomeWelcomeMessage = () =>{

    return(
      <Block safe paddingTop={10}>
        <Block row>
          <Text semibold h7>Good Morning, Ade</Text>
          <Image source={icons.sunny} width={25} height={25}/>
        </Block>
        <Text bold primary h5>
          Where are we going today ?
        </Text>
      </Block>
    )
  }



  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={screenOptions.sharedHeader}
      />
    </Stack.Navigator>
  );
};

export default BottomNavTab1;
