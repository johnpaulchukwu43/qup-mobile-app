import React from 'react';
import {StyleSheet, Modal as RNModal, ViewStyle, Platform, View} from 'react-native';

import {useTheme} from '../../hooks/';
import {IModalProps} from '../../constants/types';

import {Block,Text,Button,Image} from '../../components';
import { MaterialIcons } from '@expo/vector-icons';


interface IQueueMoreModalProps extends IModalProps{
  queueName?: string,
  visible?: boolean
}

const SearchMoreInfoModal = ({
  id = 'SearchMoreInfoModal',
  children,
  style,
  onRequestClose,
  queueName,
  ...props
}: IQueueMoreModalProps) => {
  const {assets, colors, sizes, gradients} = useTheme();
  const modalStyles = StyleSheet.flatten([style, {}]) as ViewStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const modalID =
    Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id};

  return (
    <RNModal
      {...modalID}
      {...props}
      transparent
      style={modalStyles}
      animationType="slide"
      onRequestClose={onRequestClose}>
      <Block justify="flex-end">
        <Block safe card flex={0} color="rgba(0,0,0,0.8)">
          <Text h5 color={colors.white}
                top={10}
                left={10}
                position="absolute"> {queueName} </Text>
          <Button
            top={0}
            right={0}
            position="absolute"
            onPress={() => onRequestClose?.()}>
            <Image source={assets.close} color={colors.white} />
          </Button>
          <Block
            flex={0}
            marginTop={sizes.xxl}
            paddingHorizontal={sizes.padding}>

            <Block
              marginTop={10}
              flex={0}
              height={1}
              width="100%"
              end={[1, 0]}
              start={[0, 1]}
              gradient={gradients.divider}
            />

            <View
              onTouchStart={() => console.log("clicked here")}
              style={{display: 'flex', flexDirection: "row", width:"100%", marginTop: 15}}>
              <Block style={{flexBasis: "10%", alignItems:"flex-start"}}>
                <MaterialIcons name="queue" size={25} color={colors.white} />
              </Block>
              <Block style={{flexBasis: "90%",alignItems:"flex-start"}}>
                <Text color={colors.white} bold size={16}>Join Queue (Create Reservation)</Text>
              </Block>
            </View>

            <Block
              marginTop={10}
              flex={0}
              height={1}
              width="100%"
              end={[1, 0]}
              start={[0, 1]}
              gradient={gradients.divider}
            />

            <View
              onTouchStart={() => console.log("clicked here3")}
              style={{display: 'flex', flexDirection: "row", width:"100%", marginTop: 15}}>
              <Block style={{flexBasis: "10%", alignItems:"flex-start"}}>
                <MaterialIcons name="view-module" size={25} color={colors.white} />
              </Block>
              <Block style={{flexBasis: "90%", alignItems:"flex-start"}}>
                <Text color={colors.white} bold size={16}>View Details</Text>
              </Block>
            </View>

            <Block
              marginTop={10}
              flex={0}
              height={1}
              width="100%"
              end={[1, 0]}
              start={[0, 1]}
              gradient={gradients.divider}
            />
          </Block>
        </Block>
      </Block>
    </RNModal>
  );
};

export default React.memo(SearchMoreInfoModal);
