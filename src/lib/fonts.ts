import { Instrument_Serif, Inter, JetBrains_Mono, Noto_Serif_JP } from "next/font/google";

export const fontUi = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

export const fontDisplay = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontJp = Noto_Serif_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const appFonts = [fontUi, fontDisplay, fontMono, fontJp];