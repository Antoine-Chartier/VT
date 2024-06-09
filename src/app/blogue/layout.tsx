
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <body lang="fr" suppressHydrationWarning>
          {children}
    </body>
  );
}
