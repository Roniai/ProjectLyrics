import { EPositionVerse } from "@/constants/Texts";
import { Color, Font, Size } from "@/styles";
import { View, Text } from "react-native";

type Props = {
  verseBody: {
    verse: string;
    body: string;
    position: EPositionVerse;
  };
};

export const BibleVerse: React.FC<Props> = ({ verseBody }) => {
  const { verse, body, position } = verseBody;
  return (
    <View
      style={
        position === EPositionVerse.LEFT
          ? {
              borderLeftWidth: 3,
              borderLeftColor: Color.greyscaleTextCaption,
            }
          : {
              borderRightWidth: 3,
              borderRightColor: Color.greyscaleTextCaption,
            }
      }
    >
      <View
        style={{
          marginLeft: position === EPositionVerse.LEFT ? Size.L : 0,
          marginRight: position === EPositionVerse.RIGHT ? Size.L : 0,
        }}
      >
        <Text
          style={[
            Font.body,
            {
              textAlign: position === EPositionVerse.RIGHT ? "right" : "left",
              marginBottom: Size.M,
            },
          ]}
        >
          « {body} »
        </Text>
        <Text
          style={[
            Font.captionSb,
            { textAlign: position === EPositionVerse.RIGHT ? "right" : "left" },
          ]}
        >
          — {verse}
        </Text>
      </View>
    </View>
  );
};

export default BibleVerse;
