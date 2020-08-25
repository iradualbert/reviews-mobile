import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 20,
    },
    item: {
        backgroundColor: "#f7f7f7",
        borderColor: "black",
        width: "100%",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
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