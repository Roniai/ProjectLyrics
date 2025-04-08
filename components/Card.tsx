import { vw } from "@/styles";
import { View, Image, StyleSheet } from "react-native";

type Props = {
  text: string;
  image: string;
};

export const Card: React.FC<Props> = ({ text, image }) => {
  return (
    <View>
      <Image source={require(image)} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: vw * 70,
    height: vw * 50,
    alignSelf: "center",
  },
});

export default Card;
