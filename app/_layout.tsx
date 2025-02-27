import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  CustomDrawerContent,
  ItemDrawer,
} from "@/components/navigation/drawer-navigation/drawer-content/CustomDrawerContent";
import { Color } from "@/styles";
import { SCREENS_DRAWER } from "@/constants/Screens";
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
          drawerActiveTintColor: Color.greyscaleTextDisabled,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {SCREENS_DRAWER.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.name}
            options={{
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name={
                    focused
                      ? (screen.icon.replace("-outline", "") as any)
                      : (screen.icon as any)
                  }
                  color={focused ? Color.primaryLighter : Color.greyscaleDarker}
                  size={30}
                />
              ),
              drawerLabel: ({ focused }) => (
                <ItemDrawer
                  label={screen.label}
                  color={
                    focused ? Color.primaryLighter : Color.greyscaleTextBody
                  }
                />
              ),
              title: screen.title,
            }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
}
