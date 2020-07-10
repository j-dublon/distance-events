import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Event = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Event page</Text>
    </View>
  );
};

export default Event;

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
