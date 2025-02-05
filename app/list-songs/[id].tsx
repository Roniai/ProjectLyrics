import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import lyrics from "@/assets/data/songs";
import { Color, Font, Size, vw } from "@/styles";

const SongLyrics = () => {
  const { id } = useLocalSearchParams();
  const song = lyrics.find((song) => song.id.toString() === id)!;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.idBlock}>
          <Text style={[Font.h1Sb, { color: Color.white }]}>{song.id}</Text>
        </View>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{song.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: Size.M,
  },
  titleContainer: {
    marginVertical: Size.L,
    flexDirection: "row",
    gap: Size.M,
    paddingBottom: Size.S,
    alignItems: "center",
    borderBottomColor: Color.secondaryDefault,
    borderBottomWidth: 2,
  },
  idBlock: {
    backgroundColor: Color.secondaryDefault,
    justifyContent: "center",
    borderRadius: Size.S,
    padding: Size.M,
  },
  titleBlock: {
    width: vw * 80,
  },
  title: {
    ...Font.h3Sb,
    color: Color.primaryDefault,
  },
});

export default SongLyrics;
