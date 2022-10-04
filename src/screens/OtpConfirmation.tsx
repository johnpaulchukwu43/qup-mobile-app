import React, {useCallback, useEffect, useState} from 'react';

import {Block, Button, Image, Input, Modal, Text} from '../components/';
import {useTheme, useTranslation} from '../hooks/';
import {Linking} from "react-native";
import {useNavigation} from "@react-navigation/core";
import * as regex from "../constants/regex";
import {otpCode} from "../constants/regex";

interface IOtp {
  code:string
}

interface IOtpValidation {
  isValidCode:boolean
}

const OtpConfirmation = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {gradients, sizes, colors} = useTheme();

  const [isValid, setIsValid] = useState<IOtpValidation>({
    isValidCode: false
  });

  const [otp, setOtp] = useState<IOtp>({
    code: ''
  });

  const handleChange = useCallback(
    (value) => {
      setOtp((state) => ({...state, ...value}));
    },
    [setOtp],
  );

  const handleOtpSubmission = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('OtpConfirmation dets', otp);
      navigation.navigate('OtpConfirmation')
    }
  }, [isValid, otp]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.otpCode.test(otp.code),
    }));
  }, [otp, setIsValid]);

  return (
    <Block safe marginHorizontal={sizes.padding} paddingBottom={sizes.sm}>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.md}}>
        <Text h3 gradient={gradients.primary} end={[0.7, 0]}>
          {t('confirmation.otp.title')}
        </Text>
        <Text p marginVertical={sizes.sm}>
          {t('confirmation.otp.subtitle')}
        </Text>

        <Text p bold>
          ade***@mail.com
        </Text>

        <Block marginVertical={sizes.sm}>
          <Input
            autoCapitalize="none"
            marginBottom={sizes.m}
            keyboardType="numbers-and-punctuation"
            onChangeText={(value) => handleChange({otp: value})}
            placeholder={t('confirmation.otp.inputPlaceHolder')}
          />
        </Block>

        <Text marginTop={-40} paddingRight={sizes.s} style={{marginLeft: 'auto'}}
            semibold
            color={colors.gray}>
            {t('confirmation.otp.resendAction')}
        </Text>

      </Block>

      <Button gradient={gradients.primary} marginTop={sizes.s}
      onPress={handleOtpSubmission}
      >
        <Text bold white transform="uppercase" marginHorizontal={sizes.sm}>
          {t('confirmation.otp.fowardAction')}
        </Text>
      </Button>
      <Button gray marginTop={sizes.s} onPress={() => {
        navigation.goBack();
      }}>
        <Text bold white transform="uppercase" marginHorizontal={sizes.sm}>
          {t('confirmation.otp.backAction')}
        </Text>
      </Button>
    </Block>
  );
};

export default OtpConfirmation;
