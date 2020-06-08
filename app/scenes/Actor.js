import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { ColorConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';

const Actor = () =>
{
  const currentActor = useSelector(state => state.MoviesReducer.currentActor);
  console.log('currentActor actor scene', currentActor)

  return (
    <ScrollView style={{ backgroundColor: ColorConstants.BACK_SECOND }}>
      <View>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/original/${currentActor?.Image[0]?.file_path}` }}
          key={currentActor?.detail?.name + '_p'}
          style={styles.posterImage}
        />
      </View>
      <View
        style={{
          display: 'flex',
          marginTop: 60,
          color: ColorConstants.TEXT,
          paddingHorizontal: 20,
        }}>
      </View>
    </ScrollView>
  );
};
export default Actor;

const styles = StyleSheet.create({
  backGroundImage: {
    height: 500,
    resizeMode: 'contain',
    padding: 0,
  },
  posterImage: {
    borderColor: ColorConstants.ACCENT_COLOR,
    width: 180,
    height: 350,
    marginBottom: 20,
    borderRadius: 8,
    marginTop: 30,
    marginLeft: 20,
    borderWidth: 3,
  },
  title: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  tagLine: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 25,
  },
  date: {
    color: ColorConstants.ACCENT_COLOR,
  },
  overView: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 15,
  },
  credits: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
