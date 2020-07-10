import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HTML from "react-native-render-html";
import { MaterialIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const Event = ({ navigation }) => {
  const htmlContent = navigation.getParam("description").html;
  const eventUrl = navigation.getParam("url");
  const eventTitle = navigation.getParam("name").text;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.return}
      >
        <MaterialIcons name="arrow-back" size={20} style={styles.icon} />
        <Text style={{ ...styles.return, ...styles.returnText }}>
          Return to homepage
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => Linking.openURL(eventUrl)}
      >
        <Text style={{ ...styles.link, ...styles.linkText }}>
          View and book on Eventbrite
        </Text>
        <MaterialIcons name="arrow-forward" size={20} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.content}>
        <ScrollView>
          <Text>{eventTitle}</Text>
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
    color: "#193B4F",
    marginTop: 130,
    flexDirection: "row",
  },
  returnText: {
    marginTop: 0,
    fontSize: 18,
  },
  link: {
    fontFamily: "raleway",
    color: "#193B4F",
    marginTop: 20,
    flexDirection: "row",
  },
  linkText: {
    marginTop: 0,
    fontSize: 18,
  },
  icon: {
    color: "#193B4F",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    marginTop: 50,
  },
});
