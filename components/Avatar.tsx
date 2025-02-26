import { Color, Font, Size, vw } from "@/styles";
import {
  ImageBackground,
  ImageProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

type Props = {
  name?: string;
  title?: string;
  imageSource: string;
  styleImage?: StyleProp<ImageProps>;
  style?: StyleProp<ViewProps>;
};

export const Avatar: React.FC<Props> = ({
  imageSource,
  name,
  title,
  styleImage,
  style,
}) => {
  return (
    <View style={[style, { width: vw * 28 }]}>
      <ImageBackground
        style={[styles.pdpImage, styleImage]}
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
    height: vw * 28,
    backgroundColor: Color.greyscaleSubtle,
    borderColor: Color.white,
    borderWidth: 1 * vw,
    borderRadius: 30 * vw,
    marginBottom: Size.M,
    overflow: "hidden",
    elevation: 5,
  },
});
