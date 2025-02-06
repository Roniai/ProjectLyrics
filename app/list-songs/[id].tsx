import { StyleSheet, Text, TextStyle, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import lyrics from "@/assets/data/songs";
import { Color, Font, Size, vw } from "@/styles";
import { ScrollView } from "react-native-gesture-handler";
import { TLyrics } from "@/type/song";

enum StyleText {
  BOLD = "bold",
  ITALIC = "italic",
  BLUE = "blue",
  YELLOW = "yellow",
}

const SongLyrics = () => {
  const { id } = useLocalSearchParams();
  const song = lyrics.find((song) => song.id.toString() === id)!;

  const getStyleText = (styles: StyleText[]): TextStyle => {
    return styles.reduce((acc, style) => {
      switch (style) {
        case StyleText.BOLD:
          return { ...acc, ...Font.bodySb };
        case StyleText.ITALIC:
          return { ...acc, fontStyle: "italic" };
        case StyleText.BLUE:
          return { ...acc, color: Color.primaryTextLabel };
        case StyleText.YELLOW:
          return {
            ...acc,
            ...Font.h4Sb,
            fontWeight: "bold",
            lineHeight: vw * 6,
            color: Color.secondaryTextLabel,
          };
        default:
          return acc;
      }
    }, {} as TextStyle);
  };

  const renderLyricsWithStructure = (lyrics: TLyrics) => {
    const structure = lyrics.structure?.split(" ");
    let counterA = 0;

    const render = structure?.reduce((acc, item) => {
      switch (item) {
        case "A":
          if (lyrics.verses?.length === 1) {
            acc.push({ text: lyrics?.verses?.[0]! });
          } else {
            if (lyrics?.isNumbered) {
              acc.push({
                number: (counterA + 1).toString() + ". ",
                text: lyrics?.verses?.[counterA]!,
              });
            } else {
              acc.push({ text: lyrics?.verses?.[counterA]! });
            }
            counterA++;
          }
          break;
        case "B":
          acc.push({ text: lyrics?.chorus?.[0]!, styles: [StyleText.BOLD] });
          break;
        case "B1":
          acc.push({ text: lyrics?.chorus?.[1]!, styles: [StyleText.BOLD] });
          break;
        case "B2":
          acc.push({ text: lyrics?.chorus?.[2]!, styles: [StyleText.BOLD] });
          break;
      }
      return acc;
    }, [] as { text: string; number?: string; styles?: StyleText[] }[]);

    return (
      <View style={{ gap: Size.M }}>
        {render!.map((part, index) => {
          console.log(part?.number + part?.text);
          return (
            <Text
              key={index}
              style={part?.styles ? getStyleText(part?.styles) : Font.body}
            >
              {part.number && (
                <Text style={getStyleText([StyleText.YELLOW])}>
                  {part.number}
                </Text>
              )}
              {part.text}
            </Text>
          );
        })}
      </View>
    );
  };

  const renderLyrics = (lyrics: TLyrics) => {
    return <></>;
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.idBlock}>
            <Text
              style={[
                Font.h1Sb,
                {
                  color: Color.white,
                },
              ]}
            >
              {song.id}
            </Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{song.title}</Text>
          </View>
        </View>
        <View style={styles.lyricsContainer}>
          {song.lyrics?.structure
            ? renderLyricsWithStructure(song.lyrics)
            : renderLyrics(song.lyrics)}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
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
    paddingBottom: Size.S,
  },
  titleBlock: {
    width: vw * 80,
  },
  title: {
    ...Font.h3Sb,
    color: Color.primaryDefault,
  },
  lyricsContainer: {},
});

export default SongLyrics;
