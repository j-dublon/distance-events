import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Home page</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9AD7E7",
    alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    fontFamily: "raleway",
    marginTop: 150,
  },
});
