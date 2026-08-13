import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

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

/**
 * Japanese serif — bundled locally as a static WOFF (subsetted to the glyphs
 * this site uses, full kana + all archive kanji). Using `next/font/local`
 * avoids the `next/font/google` → Turbopack remote-fetch pipeline that
 * intermittently failed for Noto Serif JP. No Google Fonts request is made
 * at build or runtime.
 *
 * To extend coverage, regenerate the subset with:
 *   curl -sG https://fonts.googleapis.com/css2 \
 *     --data-urlencode "family=Noto Serif JP:wght@400" \
 *     --data-urlencode "display=swap" \
 *     --data-urlencode "text=<glyphs>" \
 *     -o /tmp/njp.css
 * then download the `src:` URL from the CSS and replace the WOFF below.
 */
export const fontJp = localFont({
  src: "../fonts/noto-serif-jp-400.woff",
  variable: "--font-jp",
  weight: "400",
  display: "swap",
});

export const appFonts = [fontUi, fontDisplay, fontMono, fontJp];