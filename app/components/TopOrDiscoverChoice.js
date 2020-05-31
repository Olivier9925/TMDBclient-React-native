import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from '@components/CustomButton.js';
import { colorConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';

const TopOrDiscoverChoice = (props) =>
{

  return (
    <View style={styles.TopOrDiscoverChoice}>
      <CustomButton
        title="Découvrir"
        onPress={() => props.selectDiscoverMovies()}
      />
      <CustomButton
        title="Les tops"
        onPress={() => props.selectTopMovies()}
      />
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

function mapStateToProps(state)
{
  return {
  }
}

export default connect(mapStateToProps, {
  selectDiscoverMovies: MoviesReducer.actions.selectDiscoverMovies,
  selectTopMovies: MoviesReducer.actions.selectTopMovies,
})(TopOrDiscoverChoice);
