import React from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {CustomButton} from '@components/CustomButton.js';
import {colorConstants} from '@constants';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.footer}>
      <CustomButton
        title="Découvrir"
        onPress={() => {
          dispatch({type: 'DISCOVER'});
        }}
      />
      <CustomButton
        title="Les tops"
        onPress={() => {
          dispatch({type: 'TOP'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
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

export default Footer;
