import Footer from "./Footer";
import Nav from "./Nav";
import { questrial } from "@/lib/fonts";
import { Providers } from "@/app/providers";


 const AppLayout =  ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  
  
  return (
    <body className={`${questrial.className} flex flex-col min-h-screen bg-main text-text-primary`}>
      <Providers>
      <Nav />
        <main className="bg-inherit flex-grow">{children}</main>
      <Footer />
      </Providers>
    </body>
  );
}

export default AppLayout;

