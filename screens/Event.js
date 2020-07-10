import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HTML from "react-native-render-html";

const Event = ({ navigation }) => {
  const htmlContent = navigation.getParam("description").html;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.return}>Return to homepage</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <ScrollView>
          <HTML html={htmlContent} />
        </ScrollView>
      </View>
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
  return: {
    fontFamily: "raleway",
    marginTop: 130,
  },
  content: {
    flex: 1,
    fontFamily: "raleway",
    marginTop: 50,
  },
});
