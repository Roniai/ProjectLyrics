import { Color, Font, Size, vw } from "@/styles";
import React, { ReactNode } from "react";
import { View, Modal, Text, StyleSheet, Button } from "react-native";

type Props = {
  modalVisible: boolean;
  closeModal: () => void;
  message: { title: string; msg: string };
  buttonLabel: {
    ok: string;
    cancel: string;
  };
  elementRNBody?: ReactNode;
  onPress: () => void;
  type?: "success" | "loading" | "canceled" | "error";
};

export const Popup: React.FC<Props> = ({
  modalVisible,
  closeModal,
  onPress,
  type,
  message,
  buttonLabel,
  elementRNBody,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <View style={styles.textBlock}>
            <Text style={[Font.h5B, styles.title]}>{message.title}</Text>
          </View>
          <Text style={[Font.body, styles.textBody]}>{message.msg}</Text>
          {elementRNBody && <View>{elementRNBody}</View>}
          <View style={styles.buttonBlock}>
            <Button
              title={buttonLabel.ok}
              onPress={onPress}
              color={Color.primaryLighter}
              disabled={type === "loading"}
            />
            <Button
              title={buttonLabel.cancel}
              onPress={closeModal}
              color={Color.dangerBgLighter}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  container: {
    borderRadius: 6 * vw,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 5,
    shadowRadius: vw * 5,
    backgroundColor: Color.white,
    marginVertical: 4 * vw,
    marginHorizontal: 4 * vw,
    paddingHorizontal: 4 * vw,
    paddingVertical: 7 * vw,
    gap: Size.L,
  },
  iconContainer: {
    width: vw * 24,
    height: vw * 24,
    borderRadius: Size.FULL,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -17 * vw,
  },
  iconBlock: {
    width: vw * 20,
    height: vw * 20,
    borderRadius: Size.FULL,
    justifyContent: "center",
    alignSelf: "center",
  },
  icon: {
    color: Color.greyscaleTextNegative,
    alignSelf: "center",
    width: vw * 12,
    height: vw * 12,
  },
  waitWrapper: {
    flex: 1,
    marginLeft: 2 * vw,
  },
  wait: {
    backgroundColor: Color.white,
    borderRadius: 50,
  },
  textBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 1 * vw,
  },
  textBody: {
    textAlign: "center",
  },
  buttonBlock: {
    flexDirection: "row",
    gap: Size.M,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Popup;
