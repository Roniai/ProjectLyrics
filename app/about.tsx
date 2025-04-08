import { Avatar } from "@/components/Avatar";
import BibleVerse from "@/components/BibleVerse";
import Title from "@/components/Title";
import { AVATAR_DATA } from "@/constants/Images";
import {
  BODY_TEXT,
  CONTACT_ME,
  LABEL,
  TITLE,
  VERSES_TEXT,
} from "@/constants/Texts";
import { Color, Font, Size } from "@/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const About = () => {
  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <Title title={TITLE.about} />
          <BibleVerse verseBody={VERSES_TEXT.about} />

          <Avatar
            imageSource={AVATAR_DATA.me.uri}
            name={AVATAR_DATA.me.name}
            title={AVATAR_DATA.me.title}
            width={50}
            height={50}
            style={{ alignSelf: "center" }}
          />
          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="phone"
              size={50}
              onPress={() => Linking.openURL(`tel:${CONTACT_ME.phone}`)}
            />
            <MaterialCommunityIcons
              name="gmail"
              size={50}
              onPress={() => Linking.openURL(`mailto:${CONTACT_ME.email}`)}
            />
            <MaterialCommunityIcons
              name="facebook"
              size={50}
              onPress={() => Linking.openURL(`${CONTACT_ME.facebook}`)}
            />
          </View>
          <Text style={Font.subtitle}>{BODY_TEXT.about}</Text>
        </View>
      </ScrollView>
      <Text style={styles.versionText}>{LABEL.version}</Text>
    </>
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
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  versionText: {
    ...Font.caption,
    position: "absolute",
    bottom: Size.XS,
    right: Size.XS,
  },
});

export default About;
