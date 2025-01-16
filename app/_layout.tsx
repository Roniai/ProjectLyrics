import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  CustomDrawerContent,
  ItemDrawer,
} from "@/components/navigation/drawer-navigation/drawer-content/CustomDrawerContent";
import { Color } from "@/styles";
import { screensDrawer } from "@/assets/data/screens-drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerActiveTintColor: Color.greyscaleDarker,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {screensDrawer.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.name}
            options={{
              drawerIcon: () => (
                <MaterialCommunityIcons name={screen.icon as any} size={30} />
              ),
              drawerLabel: () => <ItemDrawer label={screen.label} />,
              title: screen.title,
            }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
}
