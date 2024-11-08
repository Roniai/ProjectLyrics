import { StyleSheet } from "react-native";

import Color from "./colors";
import { Size, vw } from "./sizes";
import { FontFamily } from "./font-family";

export const Font = StyleSheet.create({
  // H1
  h1B: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: Size.XL4,
    lineHeight: vw * 9.5,
    letterSpacing: -0.64,
  },
  h1Sb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: Size.XL4,
    lineHeight: vw * 9.5,
    letterSpacing: -0.64,
  },
  h1: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: Size.XL4,
    lineHeight: vw * 9.5,
    letterSpacing: -0.64,
  },

  // H2
  h2B: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: Size.XL3,
    lineHeight: vw * 9,
    letterSpacing: -0.28,
  },
  h2Sb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: Size.XL3,
    lineHeight: vw * 9,
    letterSpacing: -0.28,
  },
  h2: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: Size.XL3,
    lineHeight: vw * 9,
    letterSpacing: -0.28,
  },

  // H3
  h3B: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: Size.XL2,
    lineHeight: vw * 8.5,
    letterSpacing: -0.24,
  },
  h3Sb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: Size.XL2,
    lineHeight: vw * 8.5,
    letterSpacing: -0.24,
  },
  h3: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: Size.XL2,
    lineHeight: vw * 8.5,
    letterSpacing: -0.24,
  },

  // H4
  h4B: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: Size.XL,
    lineHeight: vw * 7.5,
  },
  h4Sb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: Size.XL,
    lineHeight: vw * 7.5,
  },
  h4: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: Size.XL,
    lineHeight: vw * 7.5,
  },

  // H5
  h5B: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: vw * 4.5,
    lineHeight: vw * 6.5,
  },
  h5Sb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: vw * 4.5,
    lineHeight: vw * 6.5,
  },
  h5: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: vw * 4.5,
    lineHeight: vw * 6.5,
  },

  // H6
  h6B: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: Size.L,
    lineHeight: vw * 6.5,
  },
  h6Sb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: Size.L,
    lineHeight: vw * 6.5,
  },
  h6: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: Size.L,
    lineHeight: vw * 6.5,
  },

  // body
  bodyB: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: vw * 3.5,
    lineHeight: Size.XL,
  },
  bodySb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: vw * 3.5,
    lineHeight: Size.XL,
  },
  body: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: vw * 3.5,
    lineHeight: Size.XL,
  },

  // subtitle
  subtitleB: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: Size.M,
    lineHeight: vw * 4.5,
    letterSpacing: 0.12,
  },
  subtitleSb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: Size.M,
    lineHeight: vw * 4.5,
    letterSpacing: 0.12,
  },
  subtitle: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: Size.M,
    lineHeight: vw * 4.5,
    letterSpacing: 0.12,
  },

  // caption
  captionB: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainB,
    fontSize: vw * 2.5,
    lineHeight: Size.L,
    letterSpacing: 0.15,
  },
  captionSb: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.mainSb,
    fontSize: vw * 2.5,
    lineHeight: Size.L,
    letterSpacing: 0.15,
  },
  caption: {
    color: Color.greyscaleTextTitle,
    fontFamily: FontFamily.main,
    fontSize: vw * 2.5,
    lineHeight: Size.L,
    letterSpacing: 0.15,
  },
});
export * from "./fonts";
