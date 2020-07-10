import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.headerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
