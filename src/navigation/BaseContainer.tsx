import AuthorizedContainer from "./AuthorizedContainer";
import UnauthorizedContainer from "./UnauthroizedContainer";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator();

const BaseContainer = () => {

  return (<AuthorizedContainer/>);
};

export default BaseContainer;
