import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import lyrics from "@/assets/data/songs";
import { Color, Font, Size, vw } from "@/styles";
import { ScrollView } from "react-native-gesture-handler";
import { TLyrics, TSong } from "@/type/song";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

enum StyleText {
  BOLD = "bold",
  BOLD_ITALIC = "bold_italic",
  ITALIC = "italic",
  BLUE = "blue",
  YELLOW = "yellow",
}

const SongLyrics = () => {
  const { id } = useLocalSearchParams();
  const song = lyrics.find((song) => song.id.toString() === id)!;
  const [numberScale, setNumberScale] = useState<number>(1);
  const [disableZoom, setDisableZoom] = useState<{
    in?: boolean;
    out?: boolean;
  }>({ in: false, out: true });
  const bodyText = {
    fontSize: vw * 3.5 * numberScale,
    lineHeight: vw * 5 * numberScale,
  };

  const getStyleText = (styles: StyleText[]): TextStyle => {
    return styles.reduce((acc, style) => {
      switch (style) {
        case StyleText.BOLD:
          return { ...acc, ...Font.bodySb, ...bodyText };
        case StyleText.BOLD_ITALIC:
          return {
            ...acc,
            fontSize: vw * 4 * numberScale,
            lineHeight: vw * 5.5 * numberScale,
            fontStyle: "italic",
            fontWeight: "bold",
          };
        case StyleText.ITALIC:
          return {
            ...acc,
            fontSize: vw * 4 * numberScale,
            lineHeight: vw * 5.5 * numberScale,
            fontStyle: "italic",
          };
        case StyleText.BLUE:
          return { ...acc, color: Color.primaryTextLabel };
        case StyleText.YELLOW:
          return {
            ...acc,
            ...Font.h4Sb,
            fontSize: vw * 5 * numberScale,
            fontWeight: "bold",
            lineHeight: vw * 6 * numberScale,
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
        case "C":
          acc.push({
            text: lyrics.bridge!,
            styles: [StyleText.BOLD_ITALIC],
          });
          break;
        case "D":
          acc.push({ text: lyrics.outro!, styles: [StyleText.ITALIC] });
          break;
        case "E":
          acc.push({ text: lyrics.intro!, styles: [StyleText.ITALIC] });
          break;
      }
      return acc;
    }, [] as { text: string; number?: string; styles?: StyleText[] }[]);

    return (
      <View style={{ gap: Size.M }}>
        {render!.map((part, index) => {
          return (
            <Text
              key={index}
              style={
                part?.styles
                  ? getStyleText(part?.styles)
                  : { ...Font.body, ...bodyText }
              }
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
    let render: { text: string; number?: string; styles?: StyleText[] }[] = [];

    if (lyrics?.intro) {
      render.push({ text: lyrics?.intro, styles: [StyleText.ITALIC] });
    }

    if (lyrics?.verses) {
      if (lyrics?.isNumbered) {
        render.push({
          number: "1. ",
          text: lyrics?.verses?.[0]!,
        });
      } else {
        render.push({ text: lyrics?.verses?.[0]! });
      }
    }

    if (lyrics?.preChorus) {
      render.push({ text: lyrics?.preChorus, styles: [StyleText.BOLD] });
    }

    if (lyrics?.chorus) {
      render.push({ text: lyrics?.chorus[0], styles: [StyleText.BOLD] });
    }

    if (lyrics?.verses && lyrics.verses.length > 1) {
      if (lyrics?.isNumbered) {
        render.push({
          number: "2. ",
          text: lyrics?.verses?.[1]!,
        });
      } else {
        render.push({ text: lyrics?.verses?.[1]! });
      }
    }

    if (lyrics?.chorus && lyrics?.chorus.length > 1) {
      render.push({ text: lyrics?.chorus[1], styles: [StyleText.BOLD] });
    }

    if (lyrics?.verses && lyrics.verses.length > 2) {
      for (let i = 2; i < lyrics.verses.length; i++) {
        if (lyrics?.isNumbered) {
          render.push({
            number: (i + 1).toString() + ". ",
            text: lyrics.verses[i],
          });
        } else {
          render.push({ text: lyrics.verses[i] });
        }
      }
    }

    if (lyrics?.bridge) {
      render.push({
        text: lyrics?.bridge,
        styles: [StyleText.BOLD_ITALIC],
      });
    }

    if (lyrics?.outro) {
      render.push({ text: lyrics?.outro, styles: [StyleText.ITALIC] });
    }

    return (
      <View style={{ gap: Size.M }}>
        {render!.map((part, index) => {
          return (
            <Text
              key={index}
              style={
                part?.styles
                  ? getStyleText(part?.styles)
                  : { ...Font.body, ...bodyText }
              }
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

  const renderAC = (song: TSong) => {
    if (song?.author || song?.composer) {
      if (song?.author === song?.composer) {
        return (
          <Text style={Font.body}>
            A/C : <Text style={Font.bodySb}>{song?.author}</Text>
          </Text>
        );
      } else {
        return (
          <>
            {song?.author && song?.author !== "" && (
              <Text style={Font.body}>
                Tonony : <Text style={Font.bodySb}>{song?.author}</Text>
              </Text>
            )}
            {song?.composer && song?.composer !== "" && (
              <Text style={Font.body}>
                Feony : <Text style={Font.bodySb}>{song?.composer}</Text>
              </Text>
            )}
          </>
        );
      }
    }
  };

  const handleZoomText = (type: "zoomIn" | "zoomOut") => {
    if (type === "zoomIn") {
      if (numberScale < 2) {
        setNumberScale((number) => number + 0.1);
        setDisableZoom({ out: false });
      } else {
        setDisableZoom({ in: true });
      }
    } else {
      if (numberScale > 1) {
        setNumberScale((number) => number - 0.1);
        setDisableZoom({ in: false });
      } else {
        setDisableZoom({ out: true });
      }
    }
  };

  return (
    <>
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
          {(song?.tone || song?.subTitle) && (
            <View style={styles.subTitleContainer}>
              {song?.tone && (
                <Text style={[Font.body, styles.tone]}>
                  Dô dia : <Text style={Font.bodySb}>{song?.tone}</Text>
                </Text>
              )}
              {song?.subTitle && (
                <Text style={styles.subTitle}>{song.subTitle}</Text>
              )}
            </View>
          )}
          <View style={styles.lyricsContainer}>
            {song.lyrics?.structure
              ? renderLyricsWithStructure(song.lyrics)
              : renderLyrics(song.lyrics)}
          </View>
          {(song?.author || song?.date || song?.artist) && (
            <View style={styles.footerContainer}>
              {(song?.author || song?.composer) && <>{renderAC(song)}</>}
              {song?.date && (
                <Text style={Font.body}>
                  Daty : <Text style={Font.bodySb}>{song?.date}</Text>
                </Text>
              )}
              {song?.artist && (
                <Text style={[Font.subtitle, { fontStyle: "italic" }]}>
                  {song?.artist}
                </Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.zoomContainer}>
        <TouchableOpacity
          onPress={() => handleZoomText("zoomIn")}
          disabled={disableZoom.in}
        >
          <MaterialCommunityIcons
            name="plus-circle"
            size={28}
            color={
              disableZoom.in ? Color.greyscaleDefault : Color.greyscaleDarker
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleZoomText("zoomOut")}
          disabled={disableZoom.out}
        >
          <MaterialCommunityIcons
            name="minus-circle"
            size={28}
            color={
              disableZoom.out ? Color.greyscaleDefault : Color.greyscaleDarker
            }
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    marginHorizontal: Size.XL,
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
    width: vw * 76,
  },
  title: {
    ...Font.h3Sb,
    color: Color.primaryLighter,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTitle: {
    ...Font.caption,
    marginTop: -Size.M,
    textAlign: "right",
    marginBottom: Size.M,
  },
  tone: {
    marginTop: -Size.L,
    marginBottom: Size.M,
  },
  lyricsContainer: {
    marginBottom: Size.XL,
  },
  footerContainer: {
    alignItems: "flex-end",
    borderTopColor: Color.greyscaleDefault,
    borderTopWidth: 1,
    paddingTop: Size.S,
    marginBottom: Size.BIG,
  },
  zoomContainer: {
    position: "absolute",
    bottom: Size.L,
    right: Size.L,
    flexDirection: "row",
    gap: Size.S,
  },
});

export default SongLyrics;
