import { ThemeColor } from "@/components/enum";

export const WHITE_TEXT_THEMES = [ThemeColor.DarkBlue];

export const getLogoFile = (color: ThemeColor) => {
  switch (color) {
    case ThemeColor.DarkBlue:
      return "/name-logo-dark-blue.svg";
    case ThemeColor.LightBlue:
      return "/name-logo-light-blue.svg";
    case ThemeColor.Green:
      return "/name-logo-green.svg";
    case ThemeColor.Brown:
      return "/name-logo-brown.svg";
    case ThemeColor.Rose:
      return"/name-logo-rose.svg";
    default:
      return "/name-logo-dark-blue.svg";
  }
};