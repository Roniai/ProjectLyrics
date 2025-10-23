import { ReactNode, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native";
import { Color, Font, Size } from "@/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  elementRNtoCollapse: ReactNode;
  isNeedBottomLine?: boolean;
  isNeedPaddingBottom?: boolean;
  isVisible?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Accordion: React.FC<Props> = ({
  label,
  elementRNtoCollapse,
  isNeedBottomLine,
  isNeedPaddingBottom,
  isVisible,
  onPress,
  style,
}) => {
  const [isCollapse, setIsCollapse] = useState(false);

  const collapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={[
          styles.labelBlock,
          {
            paddingBottom:
              (isNeedBottomLine || isNeedPaddingBottom) &&
              (isVisible ?? isCollapse)
                ? Size.XS2
                : 0,
          },
        ]}
        onPress={onPress ?? collapse}
      >
        <Text
          style={[
            Font.bodySb,
            {
              flex: 1,
              color: isCollapse ? Color.secondaryTextLabel : "black",
            },
          ]}
        >
          {label}
        </Text>
        {isCollapse ? (
          <MaterialCommunityIcons name="chevron-up" size={30} />
        ) : (
          <MaterialCommunityIcons name="chevron-down" size={30} />
        )}
      </TouchableOpacity>
      {(isVisible ?? isCollapse) && <View>{elementRNtoCollapse}</View>}
      {isNeedBottomLine && (
        <View
          style={{
            marginTop: Size.S,
            backgroundColor: Color.greyscaleDisabled,
            height: 1.5,
            marginHorizontal: 0,
          }}
        ></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelBlock: {
    flexDirection: "row",
    paddingTop: Size.S,
    alignItems: "center",
  },
});

export default Accordion;
