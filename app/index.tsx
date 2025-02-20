import BibleVerse from "@/components/BibleVerse";
import Title from "@/components/Title";
import { HOME_BODY, HOME_VERSES } from "@/constants/HomeBody";
import { Color, Font, Size } from "@/styles";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Title title={"TENY FANOLORANA"} />
        <BibleVerse verseBody={HOME_VERSES.intro} />
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
});

export default Home;
