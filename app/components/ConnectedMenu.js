import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from '@components/CustomButton';
import { colorConstants, NavigationConstants } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const homeMenuButton = choice =>
{
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <CustomButton
      title={choice}
      onPress={() =>
      {
        dispatch({ type: choice });
        navigation.navigate(NavigationConstants.MOVIE_LIST);
      }}
    />
  );
};

const ConnectedMenu = props =>
{
  return (
    <View style={styles.connectedMenu}>
      {homeMenuButton('VU')}
      {homeMenuButton('LISTE')}
    </View>
  );
};

const styles = StyleSheet.create({
  connectedMenu: {
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

export default ConnectedMenu;
