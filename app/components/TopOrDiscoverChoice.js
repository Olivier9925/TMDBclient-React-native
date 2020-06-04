import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colorConstants } from '@constants';
import HomeMenuButton from '@components/HomeMenuButton'


const TopOrDiscoverChoice = () =>
{

  return (
    <View style={styles.TopOrDiscoverChoice}>
      <HomeMenuButton choice='TOP' label='les tops' />
      <HomeMenuButton choice='DECOUVRIR' label='Découvrir' />
    </View>
  );
};

const styles = StyleSheet.create({
  TopOrDiscoverChoice: {
    backgroundColor: colorConstants.BACK_SECOND,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: colorConstants.BACK_FIRST,
    borderWidth: 1,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});


export default TopOrDiscoverChoice;
