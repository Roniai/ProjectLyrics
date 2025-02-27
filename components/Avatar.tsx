import { Color, Font, Size, vw } from "@/styles";
import {
  ImageBackground,
  ImageProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  name?: string;
  title?: string;
  imageSource: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export const Avatar: React.FC<Props> = ({
  imageSource,
  name,
  title,
  width = 28,
  height = 28,
  style,
}) => {
  return (
    <View style={[style, { width: width * vw }]}>
      <ImageBackground
        style={[styles.pdpImage, { height: height * vw }]}
        resizeMode="cover"
        source={imageSource as ImageProps}
      />
      {name && (
        <Text style={[Font.subtitleSb, { textAlign: "center" }]}>{name}</Text>
      )}
      {title && (
        <Text style={[Font.caption, { textAlign: "center" }]}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pdpImage: {
    width: "100%",
    backgroundColor: Color.greyscaleSubtle,
    borderColor: Color.white,
    borderWidth: 1 * vw,
    borderRadius: 30 * vw,
    marginBottom: Size.M,
    overflow: "hidden",
    elevation: 5,
  },
});
