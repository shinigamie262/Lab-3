import React from "react";
import { Text, View } from "react-native";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import Options from "./screens/Options";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import TabNavigator from "./routes";

const App = () => {
  return <TabNavigator />;
};

export default App;
