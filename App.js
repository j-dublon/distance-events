import React, { useState } from "react";
import * as Font from "expo-font";
import Navigator from "./routes/HomeStack";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    raleway: require("./assets/fonts/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
