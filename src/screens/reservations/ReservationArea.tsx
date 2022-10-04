import {useData, useTheme, useTranslation} from "../../hooks";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/core";
import {Block, Button, Image, Input, Product, Text} from "../../components";
import ActionButton from "react-native-action-button";
import {StyleSheet} from "react-native";
import {IExtra} from "../../constants/types";
import {Feather, MaterialIcons} from '@expo/vector-icons';


const ReservationArea = () => {

  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes, icons} = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    section1: {
      flexBasis: "20%",
      borderColor: colors.black,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: colors.success
    },

    item2: {
      flexBasis: "60%",
      borderColor: colors.black,
      // backgroundColor: colors.gray
    },

    item3: {
      flexBasis: "10%",
      borderColor: colors.black,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: colors.danger
    },

    statusItem: {
      flexBasis: "33%",
      backgroundColor: colors.success,
      borderRadius: 10,
      width: 50,
      height: 30,
      color: colors.white,
    },

    reservationName: {
      flexBasis: "33%"
    },

    waitingTime: {
      flexBasis: "33%",
      display: "flex",
      flexDirection: "row",
    },

    code:{
      flexBasis: "33%",
      display: "flex",
      flexDirection: "row"
    }
  });

  const ReservationListView = () => {
    return (
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product,key) => (
            <ReservationItemView key = {key}/>
          ))}
        </Block>
      </Block>
    )
  }

  const ReservationItemView = () => {

    return (
      <Block card row style={{marginTop: 10}}>
        <Block style={styles.section1}>
          <Image source={assets.building}/>
          <Block style={styles.statusItem} >
            <Text center color={colors.white}>Active </Text>
          </Block>
        </Block>

        <Block style={styles.item2}>

          <Block style={styles.reservationName} >
            <Text size={17}>Gtb bank queue </Text>
          </Block>

          <Block style={styles.code} >
            <Text size={15} color={colors.primary}>Code : </Text>
            <Text size={15} color={colors.primary}> QUP-123456</Text>
          </Block>

          <Block style={styles.waitingTime} >
            <Feather name="clock" size={24} color={colors.gray} />
            <Text center color={colors.gray} weight= "200"> Avg. 30 mins wait time </Text>
          </Block>
        </Block>

        <Block style={styles.item3}>
          <MaterialIcons name="keyboard-arrow-right"
                         size={24}
                         color={colors.text}
                         onPress={() => navigation.navigate("ReservationDetails")}
          />
        </Block>
      </Block>
    )
  }


  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')}/>
      </Block>

      {/*tabs*/}
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
        paddingBottom={sizes.sm}>
        <Button>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 0 ? 'primary' : 'secondary']}>
              <Image source={assets.calendar} color={colors.white} radius={0} />

            </Block>
            <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
              Current
            </Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <Button>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 1 ? 'primary' : 'secondary']}>
              <Image source={assets.clock} color={colors.white} radius={0} />
            </Block>
            <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
              History
            </Text>
          </Block>
        </Button>
      </Block>
      {/*tabs*/}

      {/* queues list */}
      <ReservationListView/>



      <ActionButton buttonColor="rgba(231,76,60,1)"
                    onPress={() => navigation.navigate('QueueCreation')}
                    offsetY={40}
                    offsetX={10}>
      </ActionButton>
    </Block>
  );


}


export default ReservationArea;
