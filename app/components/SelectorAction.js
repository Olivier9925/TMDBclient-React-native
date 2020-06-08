import React from 'react';
import { useSelector, connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from './CustomButton.js';
import { useNavigation } from '@react-navigation/native';
import { ColorConstants, NavigationConstants } from '@constants';
import UserReducer from '@reducers/UserReducer';

const SelectorAction = ({ dispatch }) =>
{
  const navigation = useNavigation();

  const currentMovieId = useSelector(state => state.MoviesReducer.currentMovieId);
  const user = useSelector(state => state.UserReducer.user);

  return (
    <View style={styles.selectorAction}>
      <CustomButton
        onPress={() =>
        {
          dispatch(UserReducer.actions.saveToWatchList(currentMovieId, user.id));
          navigation.navigate(NavigationConstants.MOVIE_LIST);
        }}
        title="+"
      />
      <CustomButton
        onPress={() =>
        {
          dispatch(UserReducer.actions.saveToWatchedList(currentMovieId, user.id));
          navigation.navigate(NavigationConstants.MOVIE_LIST);
        }}
        title="vu"
      />
    </View>
  );
};
export default connect()(SelectorAction);

const styles = StyleSheet.create({
  selectorAction: {
    borderTopColor: ColorConstants.ACCENT_COLOR,
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    borderWidth: 2,
  },
});
