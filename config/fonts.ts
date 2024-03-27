import { Inter, Roboto_Mono, Rakkas, Merriweather } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const rakkas = Rakkas({
  subsets: ["latin"],
  weight: "400",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "300", "900"],
  display: "swap",
});
