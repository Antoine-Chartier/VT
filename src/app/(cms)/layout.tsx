import { inter, josefin_slab } from "../../lib/fonts";


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    // </html>
  )
}
