import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image,Text} from '../components/';

const ExtraMenu = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();

  return (
    <Block
      scroll
      padding={sizes.padding}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.xxl}}>


      {/* privacy */}
      <Block card padding={sizes.sm} marginBottom={sizes.sm}>
        <Block row align="center" marginBottom={sizes.s}>
          <Block
            flex={0}
            align="center"
            justify="center"
            radius={sizes.s}
            width={sizes.md}
            height={sizes.md}
            marginRight={sizes.s}
            gradient={gradients.primary}>
            <Image source={assets?.document} color={colors.white} radius={0} />
          </Block>
          <Block>
            <Text semibold>{t('settings.privacy.title')}</Text>
            <Text size={12}>{t('settings.privacy.subtitle')}</Text>
          </Block>
        </Block>
        <Button
          row
          align="center"
          justify="space-between"
          onPress={() => navigation.navigate('Agreement')}>
          <Text>{t('settings.privacy.agreement')}</Text>
          <Image
            source={assets.arrow}
            color={colors.icon}
            radius={0}
            height={18}
            width={10}
          />
        </Button>
        <Button
          row
          align="center"
          justify="space-between"
          onPress={() => navigation.navigate('Privacy')}>
          <Text>{t('settings.privacy.privacy')}</Text>
          <Image
            source={assets.arrow}
            color={colors.icon}
            radius={0}
            height={18}
            width={10}
          />
        </Button>
        <Button
          row
          align="center"
          justify="space-between"
          onPress={() => navigation.navigate('About')}>
          <Text>{t('settings.privacy.about')}</Text>
          <Image
            source={assets.arrow}
            color={colors.icon}
            radius={0}
            height={18}
            width={10}
          />
        </Button>
      </Block>
    </Block>
  );
};

export default ExtraMenu;
