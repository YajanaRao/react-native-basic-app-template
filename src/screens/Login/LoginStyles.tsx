import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        // backgroundColor: "white"
    },
    signUpText: {
        // fontWeight: "bold",
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        marginVertical: 16,
        // textAlign: "center",
        // flex: 1,
        // // position: 'absolute',
        // textAlignVertical: "bottom",
        // bottom: 10
    },
    forgotPassword: {
        fontSize: 14,
        marginVertical: 8,
        marginHorizontal: 4,
        fontFamily: 'Roboto-Medium',
        textAlign: "right"
    },
    signIn: {
        marginVertical: 12,
        paddingVertical: 4
    },
    signUp: {
        fontFamily: 'Roboto-Medium',
        marginHorizontal: 4,
    },
});