import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import HTML from "react-native-render-html";
import { MaterialIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const Event = ({ navigation }) => {
  const htmlContent = navigation.getParam("description").html;
  const eventUrl = navigation.getParam("url");
  const eventTitle = navigation.getParam("name").text;

  const imgWidth = Dimensions.get("window").width - 50;

  const tagsStyles = {
    p: { fontSize: 16, fontFamily: "raleway", color: "#193B4F" },
    h2: { fontSize: 16, fontFamily: "raleway", color: "#193B4F" },
    img: { borderRadius: 6, alignSelf: "center", maxWidth: imgWidth },
  };

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
        <Text style={styles.eventTitle}>{eventTitle}</Text>
        <ScrollView style={styles.ScrollView}>
          <HTML html={htmlContent} tagsStyles={tagsStyles} />
          <Text>{}</Text>
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
  },
  return: {
    fontFamily: "raleway",
    color: "#193B4F",
    marginTop: 120,
    flexDirection: "row",
  },
  returnText: {
    marginTop: 0,
    fontSize: 18,
    fontFamily: "raleway-bold-italic",
  },
  link: {
    fontFamily: "raleway",
    color: "#193B4F",
    marginTop: 30,
    flexDirection: "row",
  },
  linkText: {
    marginTop: 0,
    fontSize: 18,
    fontFamily: "raleway-bold-italic",
  },
  icon: {
    color: "#193B4F",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    marginTop: 40,
    width: "90%",
    marginBottom: 40,
  },
  eventTitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "raleway-bold",
    marginBottom: 30,
    color: "#193B4F",
    textDecorationLine: "underline",
  },
  ScrollView: {
    backgroundColor: "#e6f5f9",
    padding: 10,
    borderRadius: 6,
  },
});
