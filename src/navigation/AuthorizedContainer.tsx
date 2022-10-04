import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home} from '../screens';
import { Feather } from '@expo/vector-icons';
import {Block, Text} from '../components';
import {useData, useTheme} from '../hooks';
import Icon from "@expo/vector-icons/AntDesign";
import {CardStyleInterpolators, StackHeaderTitleProps} from "@react-navigation/stack";
import {StackHeaderOptions} from "@react-navigation/stack/lib/typescript/src/types";
import BottomNavTab1 from "./bottomnavtabs/BottomNavTab1";
import BottomNavTab4 from "./bottomnavtabs/BottomNavTab4";
import BottomNavTab3 from "./bottomnavtabs/BottomNavTab3";
import BottomNavTab2 from "./bottomnavtabs/BottomNavTab2";

const AuthorizedContainer = () => {

  const {gradients, colors, sizes} = useTheme();

  const Tab = createBottomTabNavigator();

  const menu = {
    headerStyle: {elevation: 0},
    headerTitleAlign: 'left',
    headerTitleContainerStyle: {marginLeft: -sizes.sm},
    headerLeftContainerStyle: {paddingLeft: sizes.s},
    headerRightContainerStyle: {paddingRight: sizes.s},
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: ({children}: StackHeaderTitleProps) => (
      <Text p>{children}</Text>
    ),
    headerRight: () => (
      <Block row flex={0} align="center" marginRight={sizes.padding}>
        <TouchableOpacity
          style={{marginRight: sizes.sm}}
          // onPress={() => navigation.navigate('Home', {screen: 'Home',})}
        >
          <Icon size={25} name="notification" color={colors.text}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon size={25} name="user" color={colors.text}/>
        </TouchableOpacity>
      </Block>
    ),
  } as StackHeaderOptions;

  return (
    <Block gradient={gradients.light}>
      <Tab.Navigator screenOptions={({route}) => ({
        menu,
        tabBarIcon: ({focused, color, size}) => {
          let iconName : String;
          let routeName = route.name;
          //todo move to constants class
          if(routeName === 'Home') {
            return <Icon size={25} name="home" color={colors.text}/>
          }else if(routeName == 'Search'){
            return <Icon size={25} name="search1" color={colors.text}/>
          } else if(routeName == 'Reservations'){
            return <Icon size={25} name="calendar" color={colors.text}/>
          }else{
            return <Feather name="more-horizontal" size={25} color={colors.text} />
          }
        },
        tabBarLabelStyle:{
          fontSize: sizes.text
        },
      })}>
        <Tab.Screen name="Home" component={BottomNavTab1} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={BottomNavTab2} options={{headerShown: false}}/>
        <Tab.Screen name="Reservations" component={BottomNavTab3} options={{headerShown: false}}/>
        <Tab.Screen name="More" component={BottomNavTab4} options={{headerShown: false}}/>
      </Tab.Navigator>
    </Block>
  );
};

export default AuthorizedContainer;
