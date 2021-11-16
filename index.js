import "react-native-gesture-handler";
import { registerRootComponent } from "expo";

import App1 from "./src/Screen/Contact-list/1/App";
import App2 from "./src/Screen/Contact-list/2/App";
import App3 from "./src/Screen/Contact-list/3/App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App2);
