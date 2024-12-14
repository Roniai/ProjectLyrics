import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Accueil",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "A propos",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
