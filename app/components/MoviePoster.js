import React from 'react'
import { TouchableHighlight, Image, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NavigationConstants } from '@constants';
import MoviesReducer from '@reducers/MoviesReducer';
import FastImage from 'react-native-fast-image';

const MoviePoster = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const { movie } = props;

    const { size } = props;
    const posterStyle = size === 'small' ? { width: 80, height: 80, marginBottom: 15, borderRadius: 50 } : { width: 180, height: 250, marginBottom: 20, borderRadius: 8 };
    return (
        <View>
            <TouchableHighlight
                onPress={() => {
                    dispatch(MoviesReducer.actions.setCurrentMovie(movie?.id))
                    navigation.navigate(NavigationConstants.MOVIE);
                }}
            >
                <FastImage
                    style={posterStyle}
                    source={{
                        uri: 'https://image.tmdb.org/t/p/original/' + movie?.poster_path,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode={size === 'small' ? FastImage.resizeMode.cover : FastImage.resizeMode.contain}
                    key={`${movie?.original_title}`}
                />
            </TouchableHighlight>
        </View>
    )
}
export default MoviePoster