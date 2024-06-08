import { inter } from "../../lib/fonts";


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <body className={inter.className}>
        {children}
      </body>
    </>
  )
}
