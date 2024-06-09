import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { questrial } from "@/lib/fonts";
import { Providers } from "@/app/providers";
import {ThemeProvider} from "../../context/ThemeContext";


 const AppLayout =  ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  
  
  return (
    <body className={`${questrial.className} flex flex-col min-h-screen bg-main text-text-primary`}>
      {/* <Providers> */}
      <ThemeProvider>
      <Nav />
      </ThemeProvider>
      {/* </Providers> */}
        <main className="bg-inherit flex-grow">{children}</main>
      <Footer />
    </body>
  );
}

export default AppLayout;

