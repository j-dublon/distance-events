import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} />
    </View>
  );
};

export default Header;

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
