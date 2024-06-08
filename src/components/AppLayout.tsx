import Footer from "./Footer";
import Nav from "./Nav";
import { questrial } from "@/lib/fonts";



 const AppLayout =  ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  
  
  return (
    <>
      <body className={`${questrial.className} flex flex-col min-h-screen bg-main text-text-primary`}>
      <Nav />
        <main className="bg-inherit flex-grow">{children}</main>
      <Footer />
      </body>
    </>
  );
}

export default AppLayout;

