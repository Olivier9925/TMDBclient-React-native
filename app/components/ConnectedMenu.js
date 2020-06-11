import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ColorConstants, TextsConstants, ActionsConstants } from '@constants';
import HomeMenuButton from '@components/HomeMenuButton'


const ConnectedMenu = () => {
  return (
    <View style={styles.connectedMenu}>
      <HomeMenuButton choice={ActionsConstants.LISTE} label={TextsConstants.BUTTON_LIST} />
      <HomeMenuButton choice={ActionsConstants.VU} label={TextsConstants.BUTTON_DOWNLOAD} />
    </View>
  );
};

const styles = StyleSheet.create({
  connectedMenu: {
    backgroundColor: ColorConstants.BACK_SECOND,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: ColorConstants.BACK_FIRST,
    borderWidth: 1,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export default ConnectedMenu;
