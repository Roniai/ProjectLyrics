import {
  APP_NAME,
  APP_VERSION,
  APP_VERSION_DATE,
  LABEL,
  LINK_DOWNLOAD_APK,
  NAME_APK_FILE,
  UPDATE,
} from "@/constants/Texts";
import { Color, Font, Size } from "@/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRef, useState } from "react";
import { ProgressBar, Snackbar } from "react-native-paper";
import Popup from "@/components/Popup";
import { requestStoragePermission } from "@/utils/permission";
import * as IntentLauncher from "expo-intent-launcher";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const Update = () => {
  const [progress, setProgress] = useState(0);
  const [downloadedUri, setDownloadedUri] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const downloadResumableRef = useRef<FileSystem.DownloadResumable | null>(
    null
  );

  let fileUri = FileSystem.documentDirectory + NAME_APK_FILE;
  const downloadApk = async () => {
    const granted = await requestStoragePermission();
    console.log(granted);
    if (!granted) {
      alert(UPDATE.permission);
      return;
    }

    setPopupVisible(true);

    const downloadUrl = LINK_DOWNLOAD_APK;
    const downloadResumable = FileSystem.createDownloadResumable(
      downloadUrl,
      fileUri,
      {},
      (downloadProgress) => {
        const percent =
          downloadProgress.totalBytesWritten /
          downloadProgress.totalBytesExpectedToWrite;
        setProgress(percent);
      }
    );

    downloadResumableRef.current = downloadResumable;

    try {
      const result = await downloadResumable.downloadAsync();

      if (result?.uri) {
        setDownloadedUri(result.uri);

        // // Save file on local storage
        const asset = await MediaLibrary.createAssetAsync(result.uri);
        await MediaLibrary.createAlbumAsync("Apk", asset, false);
      } else {
        console.error(
          "Le téléchargement a échoué ou n'a pas retourné de résultat."
        );
      }
    } catch (e) {
      setIsError(true);
      console.error("Erreur de téléchargement :", e);
    }
  };

  const installApk = (uri: string) => {
    alert("Je vais installer : " + uri);

    IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
      data: uri,
      flags: 1,
      type: "application/vnd.android.package-archive",
    });
  };

  const cancelDownload = async () => {
    setPopupVisible(false);
    const downloadResumable = downloadResumableRef.current;
    console.log("downloadResumable CANCEL = ", downloadResumable);

    if (downloadResumable) {
      try {
        await downloadResumable.pauseAsync();
        await FileSystem.deleteAsync(fileUri, { idempotent: true });
        setProgress(0);
        downloadResumableRef.current = null;
        console.log("Téléchargement annulé et fichier supprimé.");
      } catch (error) {
        console.error("Erreur lors de l'annulation :", error);
      }
    } else {
      console.log("Oui ato ELSE");
    }
  };

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.versionContainer}>
            <View style={styles.versionBox}>
              <View style={styles.versionBoxView}>
                <Text style={Font.bodyB}>{APP_NAME}</Text>
                <View style={styles.versionView}>
                  <MaterialCommunityIcons name="android" size={30} />
                  <View>
                    <Text style={Font.subtitle}>
                      Laharana :{" "}
                      <Text style={styles.dynamicText}>{APP_VERSION}</Text>
                    </Text>
                    <Text style={Font.subtitle}>
                      Daty :{" "}
                      <Text style={styles.dynamicText}>{APP_VERSION_DATE}</Text>
                    </Text>
                  </View>
                </View>
                <Text style={Font.subtitle}>{LABEL.update}</Text>
              </View>
              <TouchableOpacity
                style={styles.lastupdateView}
                onPress={downloadApk}
              >
                <MaterialCommunityIcons
                  name="sync"
                  size={50}
                  color={Color.primaryLighter}
                />
                <Text style={Font.caption}>{LABEL.lastupdate}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Popup
        modalVisible={popupVisible}
        type={downloadedUri ? "success" : "loading"}
        message={{
          title: UPDATE.title,
          msg: UPDATE.body,
        }}
        buttonLabel={{ ok: UPDATE.ok, cancel: UPDATE.cancel }}
        elementRNBody={
          <>
            <ProgressBar
              progress={progress}
              color={Color.secondaryDefault}
              indeterminate={false}
            />
            <Text>{Math.round(progress * 100)}%</Text>
          </>
        }
        closeModal={cancelDownload}
        onPress={() => {
          console.log("downloadedUri = ", downloadedUri);
          if (downloadedUri) {
            installApk(downloadedUri);
          }
        }}
      />
      <Snackbar
        visible={isError}
        onDismiss={() => setIsError(false)}
        duration={4000}
      >
        {UPDATE.error}
      </Snackbar>
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
  versionContainer: {
    flex: 1,
    gap: Size.M,
    padding: Size.L,
    borderRadius: Size.M,
    backgroundColor: Color.greyscaleSubtle,
  },
  versionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  versionBoxView: {
    flex: 2,
  },
  versionView: {
    flexDirection: "row",
    gap: Size.S,
    alignItems: "center",
    marginVertical: Size.M,
  },
  lastupdateView: {
    alignItems: "center",
    justifyContent: "center",
  },
  dynamicText: {
    ...Font.subtitleB,
    color: Color.primaryLighter,
  },
});

export default Update;
