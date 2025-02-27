import { Avatar } from "@/components/Avatar";
import BibleVerse from "@/components/BibleVerse";
import Carousel from "@/components/Carousel";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { AVATAR_DATA, IMAGES, IMAGES_CAROUSEL } from "@/constants/Images";
import {
  ASSIGNMENTS,
  BODY_TEXT,
  CONTACT,
  LABEL,
  TITLE,
  VERSES_TEXT,
} from "@/constants/Texts";
import { Color, Font, Size, vh, vw } from "@/styles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Biography = () => {
  type PropsAssignment = {
    title: string;
    assignments: {
      label: string;
      details: string;
    }[];
  };

  const renderAssignments: React.FC<PropsAssignment> = ({
    title,
    assignments,
  }) => {
    return (
      <>
        <SubTitle label={title} />
        <View style={styles.listContainer}>
          {assignments.map((assignment, index) => (
            <Text style={Font.subtitleSb} key={index}>
              - {assignment.label} :
              <Text style={Font.subtitle}> {assignment.details}</Text>
            </Text>
          ))}
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Title title={TITLE.hope} />
        <Text style={Font.subtitle}>{BODY_TEXT.definition}</Text>
        <Image source={IMAGES.logo} style={styles.image} />
        <BibleVerse verseBody={VERSES_TEXT.vina} />
        <BibleVerse verseBody={VERSES_TEXT.slogan} />
        <BibleVerse verseBody={VERSES_TEXT.value} />
        <Title title={TITLE.assignment} color="grey" />
        <Text style={Font.subtitle}>{BODY_TEXT.assignment}</Text>

        {renderAssignments(ASSIGNMENTS.prev)}
        <Carousel data={IMAGES_CAROUSEL[0].images} delay={7000} />

        {renderAssignments(ASSIGNMENTS.pub)}
        <Carousel data={IMAGES_CAROUSEL[1].images} delay={6000} />

        {renderAssignments(ASSIGNMENTS.rea)}
        <Carousel data={IMAGES_CAROUSEL[2].images} delay={7000} />

        <Title title={TITLE.memberSys} color="grey" />
        <SubTitle label={TITLE.member} />
        <Text style={[Font.subtitle, { marginTop: -Size.M }]}>
          {BODY_TEXT.member}
        </Text>
        <Text
          style={[Font.caption, { textAlign: "right", marginBottom: -Size.M }]}
        >
          {LABEL.clip}
        </Text>
        <Image
          source={IMAGES.member}
          style={{
            height: vh * 65,
            width: Size.width,
            alignSelf: "center",
            marginBottom: -Size.M,
          }}
          resizeMode="contain"
        />
        <Image
          source={IMAGES.member2}
          style={{ height: vh * 52, width: Size.width, alignSelf: "center" }}
          resizeMode="contain"
        />

        <SubTitle label={TITLE.systeme} />
        <Text style={[Font.subtitle, { marginTop: -Size.M }]}>
          {BODY_TEXT.systeme}
        </Text>
        <Text style={Font.subtitle}>{BODY_TEXT.bureau}</Text>
        <View style={styles.avatarContainer}>
          {Object.values(AVATAR_DATA)
            .slice(0, 3)
            .map((avatar, index) => (
              <Avatar
                key={index}
                imageSource={avatar.uri}
                name={avatar.name}
                title={avatar.title}
              />
            ))}
        </View>
        <View
          style={[styles.avatarContainer, { justifyContent: "space-evenly" }]}
        >
          {Object.values(AVATAR_DATA)
            .slice(3)
            .map((avatar, index) => (
              <Avatar
                key={index}
                imageSource={avatar.uri}
                name={avatar.name}
                title={avatar.title}
              />
            ))}
        </View>

        <Text style={Font.subtitle}>{BODY_TEXT.comite}</Text>
        <Text
          style={[Font.caption, { textAlign: "right", marginBottom: -Size.M }]}
        >
          {LABEL.comite}
        </Text>
        <Image
          source={IMAGES.comite}
          style={{
            height: vh * 30,
            width: Size.width - Size.XL3,
            alignSelf: "center",
          }}
          resizeMode="cover"
        />

        <SubTitle label={TITLE.chorale} />
        <Text style={[Font.subtitle, { marginTop: -Size.M }]}>
          {BODY_TEXT.chorale}
        </Text>
        <Carousel data={IMAGES_CAROUSEL[3].images} />

        <Text style={[Font.subtitle, { marginTop: -Size.M }]}>
          {BODY_TEXT.coach}
        </Text>
        <Text
          style={[Font.caption, { textAlign: "right", marginBottom: -Size.M }]}
        >
          {LABEL.coachs}
        </Text>
        <Image
          source={IMAGES.coachs}
          style={{
            height: vh * 30,
            width: Size.width - Size.XL3,
            alignSelf: "center",
          }}
          resizeMode="cover"
        />

        <Text style={Font.subtitle}>{BODY_TEXT.contact}</Text>
        <View style={[styles.listContainer, { gap: Size.S }]}>
          <View style={styles.contactContainer}>
            <Text style={Font.body}>- Laharana :</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${CONTACT.pdt}`)}
            >
              <Text style={styles.contactText}>{CONTACT.pdt}</Text>
            </TouchableOpacity>
            <Text style={styles.contactText}>/</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${CONTACT.vp}`)}
            >
              <Text style={styles.contactText}>{CONTACT.vp}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contactContainer}>
            <Text style={Font.body}>- E-mail :</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`mailto:${CONTACT.email}`)}
            >
              <Text style={styles.contactText}>{CONTACT.email}</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.contactContainer, { alignItems: "flex-start" }]}>
            <Text style={Font.body}>- Facebook :</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${CONTACT.page}`)}
            >
              <Text style={[styles.contactText, { width: vw * 70 }]}>
                {LABEL.facebook}
              </Text>
            </TouchableOpacity>
          </View>
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
  bodyContainer: {
    marginHorizontal: Size.L,
    marginVertical: Size.M,
    gap: Size.M,
  },
  image: {
    width: vw * 55,
    height: vw * 50,
    alignSelf: "center",
  },
  listContainer: {
    marginTop: -Size.M,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Size.S,
  },
  contactText: {
    ...Font.bodySb,
    color: Color.primaryTextLabel,
  },
});

export default Biography;
