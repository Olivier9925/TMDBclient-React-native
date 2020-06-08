import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const Actor = () => {
  const currentActor = useSelector(state => state.MoviesReducer.currentActor);

  return (
    <ScrollView>
      <View>
        <Text>{currentActor?.details?.name}</Text>
        <Text>{currentActor?.Image[0]?.file_path}</Text>
      </View>
      <View>
        <Image source={{ uri: `https://image.tmdb.org/t/p/original${currentActor?.Image[0]?.file_path}` }} />
      </View>
    </ScrollView>
  );
};

export default Actor;

