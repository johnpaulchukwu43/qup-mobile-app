import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components/';
import ApiService from "../services/ApiService";
import {Axios} from "axios";
import {IEndUserLoginType, IEndUserRequest} from "../constants/types/api";

const isAndroid = Platform.OS === 'android';

interface ILogin {
  email: string;
  password: string;
  agreed: boolean;
}
interface ILoginValidation {
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const apiService = new ApiService()

const Login = () => {
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState<ILoginValidation>({
    email: false,
    password: false,
    agreed: false,
  });
  const [login, setLoginData] = useState<ILogin>({
    email: '',
    password: '',
    agreed: false,
  });
  const {assets, colors, gradients, sizes} = useTheme();

  const handleChange = useCallback(
    (value) => {
      setLoginData((state) => ({...state, ...value}));
    },
    [setLoginData],
  );

  const handleSignIn = useCallback(async () => {
    /** send/save registratin data */
    console.log('sending login info:', login);

    const loginType:IEndUserLoginType = {
      value:'EMAIL'
    }

    const request: IEndUserRequest = {
      emailAddress: login.email,
      password: login.password,
      loginType
    }

    let response = await apiService.authenticate(request);

    console.log("Response"+JSON.stringify(response));

  }, [login]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      email: regex.email.test(login.email),
      password: regex.password.test(login.password),
      agreed: login.agreed,
    }));
  }, [login, setIsValid]);

  return (
    <Block safe marginTop={sizes.md}>
      <Block paddingHorizontal={sizes.s}>

        {/* login form */}
        <Block
          keyboard
          marginTop={(sizes.height * 0.2 - sizes.l)}
          behavior={!isAndroid ? 'padding' : 'height'}>
          <Block
            flex={0}
            radius={sizes.sm}
            marginHorizontal="8%"
            contentContainerStyle={{borderColor: '#cb1c1c'}}
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
          >
            <Block
              blur
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              tint={colors.blurTint}
              contentContainerStyle={{borderColor: '#cb1c1c'}}
              paddingVertical={sizes.sm}>
              <Text size={sizes.h5} bold center marginBottom={sizes.md}>
                {t('login.title')}
              </Text>
              {/* social buttons */}

              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}>
                <Block
                  flex={0}
                  height={1}
                  width="100%"
                  end={[1, 0]}
                  start={[0, 1]}
                  gradient={gradients.divider}
                />
                <Block
                  flex={0}
                  height={1}
                  width="100%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
              </Block>

              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm}>
                <Input
                  label={t('common.email')}
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  keyboardType="email-address"
                  placeholder={t('common.emailPlaceholder')}
                  success={Boolean(login.email && isValid.email)}
                  danger={Boolean(login.email && !isValid.email)}
                  onChangeText={(value) => handleChange({email: value})}
                />
                <Input
                  secureTextEntry
                  label={t('common.password')}
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  placeholder={t('common.passwordPlaceholder')}
                  onChangeText={(value) => handleChange({password: value})}
                  success={Boolean(login.password && isValid.password)}
                  danger={Boolean(login.password && !isValid.password)}
                />
              </Block>

              {/* forgot password*/}
              <Block row flex={0} paddingHorizontal={sizes.sm} style={{display: 'flex', flexDirection: 'row'}}>
                <Text paddingRight={sizes.s} style={{marginLeft: 'auto'}}>
                  <Text
                    semibold
                    color={colors.gray}
                    onPress={() => {
                      Linking.openURL('https://google.com/terms');
                    }}>
                    {t('login.forgotpass')}
                  </Text>
                </Text>
              </Block>

              <Button
                onPress={handleSignIn}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                disabled={Object.values(isValid).includes(false)}>
                <Text bold white transform="uppercase">
                  {t('common.signin')}
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
