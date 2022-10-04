import {useData, useTheme, useTranslation} from "../../hooks";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/core";
import {Block, Button, Image, Input, Product, Text} from "../../components";
import ActionButton from "react-native-action-button";
import {StyleSheet, View} from "react-native";
import {IExtra} from "../../constants/types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const ReservationDetail = () => {

  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({

    itemContainer: {
      display: 'flex',
      flexDirection: "row",
      width:"100%",
      marginTop: 15,
      borderStyle: 'solid',
      borderBottomColor: 'black',
      borderBottomWidth:  0.2,
      marginBottom: 10
    },

    statusContainer : {
      display: 'flex',
      width:"100%",
      borderStyle: 'solid',
      borderBottomColor: 'black',
      borderBottomWidth:  0.2,
      justifyContent:"center",
      alignItems:"center",
    },

    statusItem: {
      backgroundColor: colors.success,
      borderRadius: 10,
      width: 100,
      height: 30,
      color: colors.white,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10
    },

    actionContainer: {
      display: "flex",
      marginTop: 10
    }
  })

  return (
    <Block align={"center"}>

      <Block color={colors.card} flex={0} marginTop={40} card width={350} >

        <View style={styles.itemContainer}>
          <Block style={{flexBasis: "50%", alignItems:"flex-start"}}>
            <Text color={colors.gray} bold size={16}>Reservation Code:</Text>
          </Block>
          <Block style={{flexBasis: "50%",alignItems:"flex-end"}}>
            <Text color={colors.text} bold size={16}>QUP-1234567887</Text>
          </Block>
        </View>

        <View style={styles.itemContainer}>
          <Block style={{flexBasis: "50%", alignItems:"flex-start"}}>
            <Text color={colors.gray} bold size={16}>Date Reserved:</Text>
          </Block>
          <Block style={{flexBasis: "50%",alignItems:"flex-end"}}>
            <Text color={colors.text} bold size={16}>Dec. 10 2021</Text>
          </Block>
        </View>

        <View style={styles.itemContainer}>
          <Block style={{flexBasis: "50%", alignItems:"flex-start"}}>
            <Text color={colors.gray} bold size={16}>Queue Name:</Text>
          </Block>
          <Block style={{flexBasis: "50%",alignItems:"flex-end"}}>
            <Text color={colors.text} bold size={16}> JPMorgan Queue1</Text>
          </Block>
        </View>

        <View style={styles.itemContainer}>
          <Block style={{flexBasis: "50%", alignItems:"flex-start"}}>
            <Text color={colors.gray} bold size={16}>Queue Location:</Text>
          </Block>
          <Block style={{flexBasis: "50%",alignItems:"flex-end"}}>
            <Text color={colors.text} bold size={16}> Lagos, Nigeria</Text>
          </Block>
        </View>

        <View style={styles.itemContainer}>
          <Block style={{flexBasis: "50%", alignItems:"flex-start"}}>
            <Text color={colors.gray} bold size={16}>Position in Queue: </Text>
          </Block>
          <Block style={{flexBasis: "50%",alignItems:"flex-end"}}>
            <Text color={colors.text} bold size={16}>8 / 100</Text>
          </Block>
        </View>

        <View style={styles.itemContainer}>
          <Block style={{flexBasis: "50%", alignItems:"flex-start"}}>
            <Text color={colors.gray} bold size={16}>Avg. waiting time</Text>
          </Block>
          <Block style={{flexBasis: "50%",alignItems:"flex-end"}}>
            <Text color={colors.text} bold size={16}> 1 hour</Text>
          </Block>
        </View>

        <View style={styles.statusContainer}>
          <View>
            <Text color={colors.gray} bold size={16}>Status</Text>
          </View>
          <View style={styles.statusItem} >
            <Text center transform="uppercase" color={colors.white}>IN PROGRESS </Text>
          </View>

        </View>

        <View style={styles.actionContainer}>
          <Button gray marginTop={sizes.s}
                  onPress={() => {console.log("clicked details")}}
                  style={{marginTop: sizes.m, display:"flex", flexDirection: "row"}}>
            <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
            <Text bold white transform="uppercase" marginHorizontal={sizes.sm}>
              Scan Barcode
            </Text>
          </Button>

          <Button gray marginTop={sizes.s}
                  onPress={() => {console.log("clicked details")}}
                  style={{marginTop: sizes.m, display:"flex", flexDirection: "row"}}>
            <MaterialCommunityIcons name="cancel" size={24} color={colors.danger}  />
            <Text bold white transform="uppercase" marginHorizontal={sizes.sm}>
              Cancel Reservation
            </Text>
          </Button>

          <View style={{marginTop: 30}}>
            <Button gray marginTop={sizes.s}
                    onPress={() => navigation.navigate("Reservations")}
                    style={{marginTop: sizes.m, display:"flex", flexDirection: "row"}}>
              <AntDesign name="back" size={24} color="black" />
              <Text bold white transform="uppercase" marginHorizontal={sizes.sm}>
                Go back
              </Text>
            </Button>
          </View>
        </View>

      </Block>
    </Block>
  );


}


export default ReservationDetail;
