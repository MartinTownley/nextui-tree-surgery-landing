import {
  Roboto_Mono,
  Merriweather,
  Bungee_Shade,
  Bungee,
} from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "300", "900"],
  display: "swap",
});

export const bungee_shade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
