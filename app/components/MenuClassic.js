import React from 'react';
import { View } from 'react-native';
import { StylesConstants } from '@constants';
import HomeMenuButton from '@components/HomeMenuButton'

const MenuClassic = () => {
  return (
    <View style={StylesConstants.menu}>
      <HomeMenuButton choice='TOP' label='les tops' />
      <HomeMenuButton choice='DECOUVRIR' label='Découvrir' />
    </View>
  );
};

export default MenuClassic;
