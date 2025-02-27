import { Color, Font, Size } from "@/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const SubTitle = ({ label }: { label: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: Size.M,
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={"arrow-up-drop-circle"}
        color={Color.secondaryDefault}
        size={20}
      />
      <Text style={Font.h6Sb}>{label}</Text>
    </View>
  );
};

export default SubTitle;
