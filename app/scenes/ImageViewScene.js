import React from 'react'
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { useSelector } from 'react-redux';

const ImageViewScene = (props) => {
    const currentImageUrl = useSelector(state => state.MoviesReducer.currentImageUrl)
    return (
        <>
            <ImageZoom
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={Dimensions.get('window').width}
                imageHeight={300}
            >
                <Image
                    style={{ width: Dimensions.get('window').width, height: 200 }}
                    source={{ uri: currentImageUrl }}
                    resizeMode='contain'
                />
            </ImageZoom>
        </>
    )
}
export default ImageViewScene