import { Avatar } from "@/components/Avatar";
import BibleVerse from "@/components/BibleVerse";
import Carousel from "@/components/Carousel";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import { AVATAR_DATA, IMAGES, IMAGES_CAROUSEL } from "@/constants/Images";
import { BODY_TEXT, CONTACT, VERSES_TEXT } from "@/constants/Texts";
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
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Title title={"VLM 67ha"} />
        <Text style={Font.subtitle}>{BODY_TEXT.definition}</Text>
        <Image source={IMAGES.logo} style={styles.image} />
        <BibleVerse verseBody={VERSES_TEXT.vina} />
        <BibleVerse verseBody={VERSES_TEXT.slogan} />
        <BibleVerse verseBody={VERSES_TEXT.value} />
        <Title title={"ASA MISIONA"} color="grey" />
        <Text style={Font.subtitle}>{BODY_TEXT.assignment}</Text>

        <SubTitle label={"FISOROHANA (Prévention)"} />
        <View style={styles.listContainer}>
          <Text style={Font.subtitleSb}>
            - Fanabeazana sy fiofanana :{" "}
            <Text style={Font.subtitle}>
              Toriteny sy fampianarana, lasy fiofanana, isa-telovolana,
              zaikabe...
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Fanantanjahan-tena sy fialam-boly :{" "}
            <Text style={Font.subtitle}>
              Sport, foot, basket, lalao iarahan'ny besinimaro...
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Hetsika ara-kolotsaina :{" "}
            <Text style={Font.subtitle}>
              Carnaval, festival des talents, danse...
            </Text>
          </Text>
        </View>
        <Carousel data={IMAGES_CAROUSEL[0].images} delay={7000} />

        <SubTitle label={"FANENTANANA (Sensibilisation)"} />
        <View style={styles.listContainer}>
          <Text style={Font.subtitleSb}>
            - Eo anivon'ny fiangonana :{" "}
            <Text style={Font.subtitle}>
              Ao amin'ny FLM 67ha, amin'ny Alahadin'ny VLM, amin'ny volanan'ny
              VLM...
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Eny anivon'ny sekoly :{" "}
            <Text style={Font.subtitle}>
              Manentana ny mpianatra tsy hirona amin'ny zava-mahadomelina satria
              izy ireny no hoavin'ny firenena.
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Eny anivon'ny "quartier" :{" "}
            <Text style={Font.subtitle}>
              Fanentanana sy fampianarana ny mpiara-monina fa ratsy ny
              zava-mahadomelina ary mitaona ireo tanora tsy hiditra amin'izany.
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Eny an-dalambe (animation mobile) :{" "}
            <Text style={Font.subtitle}>
              Mandeha ambony camion manao fanentanana toy ireny manao
              propagandy, miteny eny an-dalambe toy ireny mpitoriteny amin'ny
              fiangonana zandriny ireny.
            </Text>
          </Text>
        </View>
        <Carousel data={IMAGES_CAROUSEL[1].images} delay={6000} />

        <SubTitle label={"FANARENANA (Réhabilitation)"} />
        <View style={styles.listContainer}>
          <Text style={Font.subtitleSb}>
            - Hetsika Manga :{" "}
            <Text style={Font.subtitle}>
              Fanentanana sy fanarenana ialohavan'ny fampianarana maromaro
              mandritry ny fotoana maharitra.
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Cure de désintoxication :{" "}
            <Text style={Font.subtitle}>
              Fandraisana an-tanana ireo olona te hiala amin'ny
              zava-mahadomelina ka entina tsaboina.
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Vondrom-Bavaka Manga na VBM :{" "}
            <Text style={Font.subtitle}>
              Fotoana iray itondrana am-bavaka ireo olona voagejan'ny
              zava-mahadomelina sy ireo fianakaviany izay mijaly noho izany.
              Isaky ny Sabotsy faran'ny volana, @ 02 - 03:30 ora tolakandro izy
              ity nanomboka ity taona 2025 ity.
            </Text>
          </Text>
          <Text style={Font.subtitleSb}>
            - Centre d'Ecoute et de Réhabilitation :{" "}
            <Text style={Font.subtitle}>
              Ivotoerana fihainoana sy fanoroana hevitra, fandraisana an-tanana
              ireo olona voagejan'ny zava-mahadomelina sy ireo fianakaviany izay
              mijaly.
            </Text>
          </Text>
        </View>
        <Carousel data={IMAGES_CAROUSEL[2].images} delay={7000} />

        <Title title={"MPIKAMBANA SY RAFITRA"} color="grey" />
        <SubTitle label={"MPIKAMBANA"} />
        <Text style={[Font.subtitle, { marginTop: -Size.M }]}>
          {BODY_TEXT.member}
        </Text>
        <Text
          style={[Font.caption, { textAlign: "right", marginBottom: -Size.M }]}
        >
          Tournage Clip Tsy irery ianao - Sept 2024
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

        <SubTitle label={"RAFITRA"} />
        <Text style={[Font.subtitle, { marginTop: -Size.M }]}>
          {BODY_TEXT.systeme}
        </Text>
        <Text style={Font.subtitle}>{BODY_TEXT.bureau}</Text>
        <View style={styles.avatarContainer}>
          <Avatar
            imageSource={AVATAR_DATA.pdt.uri}
            name={AVATAR_DATA.pdt.name}
            title={AVATAR_DATA.pdt.title}
          />
          <Avatar
            imageSource={AVATAR_DATA.vp.uri}
            name={AVATAR_DATA.vp.name}
            title={AVATAR_DATA.vp.title}
          />
          <Avatar
            imageSource={AVATAR_DATA.tres.uri}
            name={AVATAR_DATA.tres.name}
            title={AVATAR_DATA.tres.title}
          />
        </View>
        <View
          style={[styles.avatarContainer, { justifyContent: "space-evenly" }]}
        >
          <Avatar
            imageSource={AVATAR_DATA.sec1.uri}
            name={AVATAR_DATA.sec1.name}
            title={AVATAR_DATA.sec1.title}
          />
          <Avatar
            imageSource={AVATAR_DATA.sec2.uri}
            name={AVATAR_DATA.sec2.name}
            title={AVATAR_DATA.sec2.title}
          />
        </View>

        <Text style={Font.subtitle}>{BODY_TEXT.comite}</Text>
        <Text
          style={[Font.caption, { textAlign: "right", marginBottom: -Size.M }]}
        >
          Komity VLM 67ha - 2023-2027
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

        <SubTitle label={"ANTOKO MPIHIRA"} />
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
          Coachs VLM 67ha - 2023-2027
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
                Vokovokomanga Fanantenana Croixbleue - VLM 67Ha
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
