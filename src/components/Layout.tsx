// import type { Metadata } from "next";
import { inter, josefin_slab } from "../lib/fonts";



// export const metadata: Metadata = {
//   title: "VT",
//   description: "Test de Viva Tremblant",
//   icons: {
//     icon: [
//       {
//         url: '/favicon-couleur.ico',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/favicon.ico',
//         media: '(prefers-color-scheme: dark)',
//       },
//     ],
//   },
// };

export default function App({ children}: Readonly<{children: React.ReactNode;}>) {
  return (
      <body className={josefin_slab.className + " flex flex-col min-h-screen"}>
        {children}
      </body>
  );
}
