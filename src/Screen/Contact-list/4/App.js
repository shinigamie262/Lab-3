import React from "react";
import { Text, View } from "react-native";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import Options from "./screens/Options";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import DrawerNavigation from "./routes";

const App = () => {
  return <DrawerNavigation />;
};

export default App;
