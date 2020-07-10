import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
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
        <Text style={styles.content}>Click on an event to learn more!</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => String(Math.random() * 1)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Event", item);
              }}
            >
              <Text>{item.name.text}</Text>
              <Text>{modifyDate(item.start.local)}</Text>
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
    // justifyContent: "center",
  },
  content: {
    fontFamily: "raleway",
    marginTop: 150,
  },
});
