import { StyleSheet } from "react-native";
import { colors } from "../../utils/constant";

export const BtnContainer = StyleSheet.create({
  borderRadius: 10,
  overflow: "hidden",
});

export const Btn = StyleSheet.create({
  backgroundColor: colors.primary,
  padding: 0,
  with: "100%",
  borderRadius: 10,
});
