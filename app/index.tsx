import BibleVerse from "@/components/BibleVerse";
import Title from "@/components/Title";
import { BODY_TEXT, VERSES_TEXT } from "@/constants/TextBody";
import { Color, Font, Size } from "@/styles";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Title title={"TENY FANOLORANA"} />
        <BibleVerse verseBody={VERSES_TEXT.intro} />
        <Text style={Font.subtitle}>{BODY_TEXT.intro}</Text>
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
});

export default Home;
