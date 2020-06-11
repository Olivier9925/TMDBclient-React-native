import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ColorConstants, StylesConstants } from '@constants';
import HomeMenuButton from '@components/HomeMenuButton'

const TopOrDiscoverChoice = () => {
  return (
    <View style={StylesConstants.menu}>
      <HomeMenuButton choice='TOP' label='les tops' />
      <HomeMenuButton choice='DECOUVRIR' label='Découvrir' />
    </View>
  );
};

export default TopOrDiscoverChoice;
