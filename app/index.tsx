import { EPositionVerse, HOME_BODY, HOME_VERSES } from "@/constants/HomeBody";
import { Color, Font, Size } from "@/styles";
import { StyleSheet, Text, View } from "react-native";

const renderBibleVerse = (verseBody: {
  verse: string;
  body: string;
  position: EPositionVerse;
}) => {
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

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>TENY FANOLORANA</Text>
        {renderBibleVerse(HOME_VERSES.intro)}
        <Text style={Font.subtitle}>{HOME_BODY.intro}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  bodyContainer: {
    marginHorizontal: Size.L,
    marginVertical: Size.M,
    gap: Size.M,
  },
  title: {
    ...Font.h4Sb,
    color: Color.primaryLighter,
    textAlign: "center",
    marginBottom: Size.M,
  },
});

export default Home;
