import { Color, Font } from "@/styles";
import { Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  color?: "blue" | "grey";
};

export const Title: React.FC<Props> = ({ title, color = "blue" }) => {
  return (
    <Text
      style={[
        styles.title,
        {
          color:
            color === "grey" ? Color.greyscaleDarker : Color.primaryLighter,
        },
      ]}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    ...Font.h4Sb,
    textAlign: "center",
  },
});

export default Title;
