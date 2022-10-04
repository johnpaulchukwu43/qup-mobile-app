import {useData, useTheme, useTranslation} from "../../hooks";
import React, {useCallback, useState} from "react";
import {useNavigation} from "@react-navigation/core";
import {Block, Button, Image, Input, Product, Text} from "../../components";
import {SimpleLineIcons} from '@expo/vector-icons';
import {Feather, MaterialIcons} from '@expo/vector-icons';
import {StyleSheet, TouchableOpacity} from "react-native";
import {ICreateQueueModal, IExtra, IProduct} from "../../constants/types";

import AwesomeAlert from 'react-native-awesome-alerts';


const SearchArea = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      marginRight: 0
    }
  });


  const SearchItem = ({image, title, type, linkLabel}: IProduct) => {
    const {t} = useTranslation();
    const {assets, colors, sizes} = useTheme();

    const isHorizontal = type !== 'vertical';
    const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

    const modalInitialState = {
      showModal: false,
      title: 'Join Queue',
      confirmText: 'Yes, join now.',
      cancelText: 'No, go back.',
    };

    const [modal, setModal] = useState<ICreateQueueModal>(modalInitialState);
    const [stuff, setStuff] = useState<boolean>(false);

    const hideModal = () => {
      setModal(modalInitialState);
    }

    return (
      <Block
        card
        flex={0}
        row={isHorizontal}
        marginBottom={sizes.sm}
        width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>
        <Image
          resizeMode="cover"
          source={{uri: image}}
          style={{
            height: isHorizontal ? 114 : 110,
            width: !isHorizontal ? '100%' : sizes.width / 2.435,
          }}
        />
        <Block
          paddingTop={sizes.s}
          justify="space-between"
          paddingLeft={isHorizontal ? sizes.sm : 0}
          paddingBottom={isHorizontal ? sizes.s : 0}>
          <Text p>BankOfUC Queue</Text>
          <Text color={colors.gray}>Code: QUP-1234-45</Text>

          <Block row flex={0} align="center">
            <TouchableOpacity style={{marginRight: "auto"}}>
              <SimpleLineIcons name="eye" size={25} color={colors.primary}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: "auto"}}>
              <MaterialIcons name="queue" size={25} color={colors.primary} onPress={() => {
                setModal(modal => ({...modal,
                  msg:`Would you like to create reservation by joining BankOfUC Queue?`,
                  showModal:true
                }))
              }}/>
            </TouchableOpacity>
          </Block>

        </Block>

        <AwesomeAlert
          show={modal.showModal}
          showProgress={false}
          title={modal.title}
          message={modal.msg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText={modal.cancelText}
          confirmText={modal.confirmText}
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => hideModal()}
          onConfirmPressed={() => hideModal()}
        />
      </Block>
    );
  };

  const SearchList = () => {
    return (
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            <SearchItem {...product} key={`card-${product?.id}`}/>
          ))}
        </Block>
      </Block>

    )
  }

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder="Search for Queues"/>
      </Block>

      {/* queues list */}
      <SearchList/>


    </Block>

  );
};


export default SearchArea;
