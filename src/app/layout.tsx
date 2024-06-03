import type { Metadata } from "next";
import { absoluteUrl } from '@/lib/utils'
import "../styles/globals.css";


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
        url: '/favicon.ico',
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
    <html lang="fr">
    <form name="contact" method="post" data-netlify='true'>
    <input type="hidden" name="form-name" value="contact" />
      <div>
       <label htmlFor="name">Name</label>
       <input type="text" id="name" name="name" />
      </div>
      <div>
       <label htmlFor="email">Email</label>
       <input type="email" id="email" name="email" />
      </div>
      <div>
       <label htmlFor="message">Message</label>
       <textarea id="message" name="message" ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>


        {children}
        
    </html>
  );
}
