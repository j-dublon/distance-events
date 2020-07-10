import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as api from "../utils/api";

export default class Home extends Component {
  state = {
    events: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchEvents().then((events) => {
      this.setState({ events: events, isLoading: false });
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
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Events", item)}
            >
              <Text>{item.name.text}</Text>
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
