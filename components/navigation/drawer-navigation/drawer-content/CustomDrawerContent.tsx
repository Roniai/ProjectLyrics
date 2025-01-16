import { StyleSheet, View, Image, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Font, Size, vw } from "@/styles";
import { Entypo } from "@expo/vector-icons";

type Props = {
  label: string;
};

const HeaderDrawer = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../../assets/images/logo-hope.png")}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={Font.h5B}>Tononkira</Text>
        <Text style={Font.body}>VLM 67ha</Text>
      </View>
    </View>
  );
};

export const ItemDrawer: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={Font.body}>{label}</Text>
      <Entypo name="chevron-right" size={18} />
    </View>
  );
};

export const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView {...props}>
        <HeaderDrawer />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    gap: Size.L,
    marginVertical: Size.L,
    marginHorizontal: Size.M,
  },
  image: {
    width: vw * 17,
    height: vw * 17,
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
