import { colors } from "./colors";
import { space, lineHeights } from "./spacings";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./typography";

export type DefaultTheme = typeof theme;

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};