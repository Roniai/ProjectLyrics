import * as MediaLibrary from "expo-media-library";

export const requestStoragePermission = async () => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== "granted") {
    return false;
  }
  return true;
};
