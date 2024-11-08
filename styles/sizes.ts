import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
// Basic
export const vw = width / 100;
export const vh = height / 100;

// Number Scale
export const XS3 = vw * 0.5;
export const XS2 = vw * 1;
export const XS = vw * 1.5;
export const S = vw * 2;
export const M = vw * 3;
export const L = vw * 4;
export const XL = vw * 5;
export const XL2 = vw * 6;
export const XL3 = vw * 7;
export const XL4 = vw * 8;
export const BIG = vw * 10;
export const FULL = vw * 50;

export const Size = {
  height,
  width,
  vw,
  vh,
  XS3,
  XS2,
  XS,
  S,
  L,
  M,
  XL,
  XL2,
  XL3,
  XL4,
  BIG,
  FULL,
};
