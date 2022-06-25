import { DefaultTheme } from "./src/infrastructure";

export type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

export type StyledProps = {
  theme: DefaultTheme;
}
