import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as api from "../utils/api";
import modifyDate from "../utils/modifyDate";

export default class Home extends Component {
  state = {
    events: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchEvents().then((events) => {
      const correctedEvents = [...events];
      correctedEvents[2].name.text = "Snoop Dogg 'I Wanna Thank Me' 2020 Tour";
      this.setState({ events: correctedEvents, isLoading: false });
    });
  }

  render() {
    const { events } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Click on an event to learn more!</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => String(Math.random() * 1)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Event", item);
              }}
              style={styles.event}
            >
              <View style={styles.eventContent}>
                <Image source={{ uri: item.logo.url }} style={styles.image} />
                <Text
                  style={{
                    ...styles.eventContentText,
                    ...styles.eventContentTitle,
                  }}
                >
                  {item.name.text}
                </Text>
                <Text style={styles.eventContentText}>
                  {modifyDate(item.start.local)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9AD7E7",
    alignItems: "center",
  },
  intro: {
    fontFamily: "raleway",
    marginTop: 120,
    marginBottom: 40,
    fontSize: 18,
  },
  event: {
    borderRadius: 8,
    backgroundColor: "#193B4F",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#1F465B",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  eventContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  eventContentText: {
    fontFamily: "raleway",
    color: "#F06427",
    textAlign: "center",
  },
  eventContentTitle: {
    fontSize: 16,
    fontFamily: "raleway-bold",
  },
  image: {
    width: "70%",
    height: 100,
    alignSelf: "center",
  },
});
