import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from './CustomButton.js';
import { useNavigation } from '@react-navigation/native';
import { ColorConstants, NavigationConstants, TextsConstants } from '@constants';
import UserReducer from '@reducers/UserReducer';

const MenuAction = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const currentMovieId = useSelector(state => state.MoviesReducer.currentMovieId);
  const account_id = useSelector(state => state.UserReducer.account_id);
  const session_id = useSelector(state => state.UserReducer.session_id);

  const { isInWatchList } = props;
  return (
    <View style={styles.MenuAction}>
      <CustomButton
        onPress={() => {
          dispatch(UserReducer.actions.saveToWatchList(currentMovieId, account_id, session_id, isInWatchList));
          navigation.navigate(NavigationConstants.MOVIE_LIST);
        }}
        title={isInWatchList ? TextsConstants.SELECTOR_REMOVE : TextsConstants.SELECTOR_ADD}
      />
      <CustomButton
        onPress={() => {
          dispatch(UserReducer.actions.saveToWatchedList(currentMovieId, user.id));
          navigation.navigate(NavigationConstants.MOVIE_LIST);
        }}
        title={TextsConstants.SELECTOR_FAV_ADD}
      />
    </View>
  );
};
export default MenuAction;

const styles = StyleSheet.create({
  MenuAction: {
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
