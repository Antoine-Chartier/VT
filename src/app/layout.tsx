import type { Metadata } from "next";
import { absoluteUrl } from '@/lib/utils'
import "../styles/globals.css";
// import { questrial } from "@/lib/fonts";
// import { ThemeProviderV3 } from "@/components/Theme-providerV3";



export const metadata: Metadata = {
  metadataBase: new URL('https://vivatremblant.netlify.app/'),

  title: {
    default: 'Viva Tremblant',
    template: ' %s | VT'
  },
  description: "Test de Viva Tremblant",
  openGraph: {
    title: 'Viva Tremblant - vivre Tremblant autrement',
    description: 'A blog starter built with Outstatic.',
    url: absoluteUrl('/'),
    siteName: 'Viva Tremblant',
    images: [
      {
        url: absoluteUrl('/images/og/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'fr_CA',
    type: 'website'
  },
  icons: {
    icon: [
      {
        url: '/favicon/favicon-couleur.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="fr" suppressHydrationWarning> 
        {/* <ThemeProviderV3> */}
          {children}
        {/* </ThemeProviderV3> */}
    </html>
  );
}
