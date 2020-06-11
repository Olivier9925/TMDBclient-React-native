import ColorConstants from '@constants/ColorConstants';

export default {
    style1: { // Height from visible part of the navigation bar (visible:66 + invisible:30 = 96 see TabBarComponent)
        padding: 20,
        flex: 1,
        backgroundColor: ColorConstants.BACK_SECOND
    },
    style2: {
        height: 42,
        width: 130,
        marginTop: 68,
    },
    title: {
        color: ColorConstants.TEXT_TITLE,
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 30,
    },
    subtitle: {
        color: ColorConstants.TEXT_SUBTITLE,
        fontSize: 20,
        fontWeight: 'bold',
    },

};
