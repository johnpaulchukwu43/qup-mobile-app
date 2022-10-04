import React, {useCallback, useState} from 'react';
import PagerView from 'react-native-pager-view';
import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import {Login,Register} from '../screens/';


const Authentication = () => {
  const {t} = useTranslation();
  const {notifications} = useData();
  const [tab, setTab] = useState('SignUp');
  const pagerRef = React.createRef<PagerView>();
  const {icons, colors, sizes} = useTheme();


  const handleTab = useCallback(
    (key) => {
      setTab(key);
      pagerRef.current?.setPage(key === 'SignUp' ? 1 : 0);
    },
    [setTab, pagerRef],
  );

  return (
    <Block>
      <PagerView
        ref={pagerRef}
        style={{flex: 1}}
        scrollEnabled={false}
        initialPage={tab === 'SignUp' ? 1 : 0}>

        {/* Login Tab */}
        <Block
          scroll
          nestedScrollEnabled
          padding={sizes.padding}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.xxl}}>
          <Login/>
        </Block>

        {/* SignUp Tab */}
        <Block
          scroll
          nestedScrollEnabled
          padding={sizes.padding}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.xxl}}>
          <Register/>

        </Block>
      </PagerView>

      {/* tabs */}
      <Block safe flex={0} color={colors.card}>
        <Block
          row
          flex={0}
          align="center"
          paddingTop={sizes.sm}
          justify="space-evenly">
          <Button onPress={() => handleTab('Login')}>
            <Image
              radius={0}
              width={20}
              height={20}
              source={icons.users}
              color={colors[tab === 'Login' ? 'primary' : 'secondary']}
            />
            <Text
              semibold
              size={12}
              primary={tab === 'Login'}
              secondary={tab !== 'Login'}>
              {t('login.title')}
            </Text>
          </Button>
          <Button onPress={() => handleTab('SignUp')}>
            <Image
              radius={0}
              width={20}
              height={20}
              source={icons.register}
              color={colors[tab === 'SignUp' ? 'primary' : 'secondary']}
            />
            <Text
              semibold
              size={12}
              primary={tab === 'SignUp'}
              secondary={tab !== 'SignUp'}>
              {t('register.title')}
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Authentication;
