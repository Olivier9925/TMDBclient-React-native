import React from 'react';
import { useDispatch } from 'react-redux';
import { CustomButton } from '@components/CustomButton.js';
import { NavigationConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';
import { useNavigation } from '@react-navigation/native';

const HomeMenuButton = (props) =>
{
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { choice, label } = props;

  return (
    <CustomButton
      title={label}
      onPress={() =>
      {
        dispatch(MoviesReducer.actions.selectChoiceFilter(choice))
        navigation.navigate(NavigationConstants.MOVIES);
      }}
    />
  );
}
export default HomeMenuButton