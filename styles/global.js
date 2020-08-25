import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        color: "#333",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    }
})