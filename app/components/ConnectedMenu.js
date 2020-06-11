import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ColorConstants } from '@constants';
import HomeMenuButton from '@components/HomeMenuButton'


const ConnectedMenu = () => {
  return (
    <View style={styles.connectedMenu}>
      <HomeMenuButton choice='LISTE' label='liste' />
      <HomeMenuButton choice='VU' label='vu' />
    </View>
  );
};

const styles = StyleSheet.create({
  connectedMenu: {
    backgroundColor: ColorConstants.BACK_FIRST,
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
