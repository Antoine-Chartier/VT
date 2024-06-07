import Footer from "./Footer";
import Nav from "./Nav";


 const AppLayout =  ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Nav />
        <main className="bg-inherit flex-grow">{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;

