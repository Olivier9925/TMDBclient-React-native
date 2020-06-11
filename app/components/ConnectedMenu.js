import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StylesConstants, TextsConstants, ActionsConstants } from '@constants';
import HomeMenuButton from '@components/HomeMenuButton'


const ConnectedMenu = () => {
  return (
    <View style={StylesConstants.menu}>
      <HomeMenuButton choice={ActionsConstants.LISTE} label={TextsConstants.BUTTON_LIST} />
      <HomeMenuButton choice={ActionsConstants.FAVORIS} label={TextsConstants.BUTTON_DOWNLOAD} />
    </View>
  );
};

export default ConnectedMenu;
