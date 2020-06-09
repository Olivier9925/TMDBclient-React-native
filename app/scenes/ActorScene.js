import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { ColorConstants } from '@constants';
import MoviePoster from '@components/MoviePoster'


const ActorScene = () => {
  const currentActor = useSelector(state => state.MoviesReducer.currentActor);

  const renderActorBio = () => {
    return (
      <>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original/${
              currentActor?.Image[0]?.file_path
              }`,
          }}
          style={styles.backGroundImage}>
          <View>
            {currentActor?.Image[1]?.file_path && <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original/${
                  currentActor?.Image[1]?.file_path
                  }`,
              }}
              key={currentActor?.details?.name + '_p'}
              style={styles.portrait}
            />}
          </View>
        </ImageBackground>
        <View
          style={{
            display: 'flex',
            marginTop: 60,
            color: ColorConstants.TEXT,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.name}>{currentActor?.details?.name}</Text>
          <Text style={styles.bio}>{currentActor?.details?.biography}</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <FlatList
        data={currentActor.filmo}
        renderItem={({ item }) => <MoviePoster movie={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        refreshing={true}
        ListHeaderComponent={() => renderActorBio()}
        columnWrapperStyle={{
          justifyContent: 'space-around',
        }}
        initialNumToRender={6}
        removeClippedSubviews={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backGroundImage: {
    height: 500,
    resizeMode: 'contain',
    padding: 0,
  },
  portrait: {
    borderColor: ColorConstants.ACCENT_COLOR,
    width: 180,
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
    marginTop: 300,
    marginLeft: 20,
    borderWidth: 4,
  },
  name: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  bio: {
    color: ColorConstants.TEXT,
    paddingVertical: 10,
    fontSize: 15,
  },
});

export default ActorScene;

