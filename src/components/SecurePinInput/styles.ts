import { StyleSheet } from 'react-native';

import { AppColors, AppFonts, AppSizes } from '@theme';

/* Styles ==================================================================== */
export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    hiddenInput: {
        height: 0,
        width: 0,
    },
    digits: {
        height: AppSizes.verticalScale(80),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 0,
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',
    },
    pinStyle: {
        width: 18,
        height: 18,
        marginRight: 12,
        marginLeft: 12,
        borderRadius: 9,
        opacity: 0.3,
        backgroundColor: AppColors.greyDark,
    },
    pinActiveStyle: {
        opacity: 1.0,
        backgroundColor: AppColors.blue,
    },
    keyboardWrap: {
        width: AppSizes.screen.width,
        marginTop: AppSizes.verticalScale(50),
    },
    numWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    line: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    numText: {
        color: AppColors.black,
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.h3.size,
    },
    bottomWrap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
