import ColorConstants from '@constants/ColorConstants';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default {

    screenWidth: {
        width: windowWidth,
    },

    // composants
    menu: {
        width: windowWidth,
        backgroundColor: ColorConstants.BACK_SECOND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopColor: ColorConstants.BACK_FIRST,
        borderWidth: 1,
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    // TEXTES - TITRES - SOUS TITRES -
    title: {
        color: ColorConstants.TEXT_TITLE,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 30,
        marginBottom: 45,
    },
    subtitle: {
        color: ColorConstants.TEXT_SUBTITLE,
        fontSize: 20,
        fontWeight: 'bold',
    },

    // TEXTINPUT - BOUTONS
    textInputFullWidth: {
        color: ColorConstants.TEXT,
        borderColor: ColorConstants.TEXT,
        backgroundColor: ColorConstants.BACK_SECOND,
        width: windowWidth - 30,
        height: 40,
        padding: 10,
        borderWidth: 0,
        borderRadius: 5,
        marginBottom: 10,
    },
    textInputNoWidth: {
        color: ColorConstants.TEXT,
        borderColor: ColorConstants.TEXT,
        backgroundColor: ColorConstants.BACK_SECOND,
        height: 40,
        padding: 10,
        borderWidth: 0,
        borderRadius: 5,
        marginBottom: 10,
    }


};
