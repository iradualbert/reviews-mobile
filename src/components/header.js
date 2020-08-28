import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.header}>
           <Text style={styles.headerText}>Favepark</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: 20,
        letterSpacing: 1
    }
})
export default Header;