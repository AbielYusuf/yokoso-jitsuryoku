import type { Metadata, Viewport } from "next";
import { appFonts } from "@/lib/fonts";
import { site } from "@/data/site";
import { SiteFrame } from "@/components/frame/SiteFrame";
import { SiteNavProvider } from "@/components/nav/SiteNavProvider";
import "./globals.css";

const { name, archive, school } = site;

export const metadata: Metadata = {
  title: {
    default: `${name} — The Meritocracy of the Classroom`,
    template: `%s — ${name}`,
  },
  description:
    "An unofficial, fan-made interactive archive inspired by Classroom of the Elite. Enter the ANHS private archive.",
  metadataBase: new URL("https://cote-experience.vercel.app"),
  openGraph: {
    title: `${name} — ${archive}`,
    description: `Enter the ${school}. An unofficial fan archive.`,
    siteName: `${name} — ${archive}`,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVariables = appFonts.map((font) => font.variable).join(" ");
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-svh">
        <SiteNavProvider>
          <SiteFrame />
          {children}
        </SiteNavProvider>
      </body>
    </html>
  );
}