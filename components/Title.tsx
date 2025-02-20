import { Color, Font, Size } from "@/styles";
import { Text, StyleSheet } from "react-native";

export const Title = ({ title }: { title: string }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    ...Font.h4Sb,
    color: Color.primaryLighter,
    textAlign: "center",
    marginBottom: Size.M,
  },
});

export default Title;
