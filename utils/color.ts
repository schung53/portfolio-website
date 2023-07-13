import { ThemeColor } from "@/components/enum";

export const getLogoFile = (color: ThemeColor) => {
  switch (color) {
    case ThemeColor.Red:
      return "/name-logo-red.svg";
    case ThemeColor.Pink:
      return "/name-logo-pink.svg";
    case ThemeColor.Yellow:
      return "/name-logo-yellow.svg";
    case ThemeColor.Blue:
      return "/name-logo-blue.svg";
    case ThemeColor.Brown:
      return"/name-logo-brown.svg";
    default:
      return "/name-logo-red.svg";
  }
};