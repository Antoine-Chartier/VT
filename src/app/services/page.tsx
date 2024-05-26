import { Metadata } from "next";
import Head from "next/head";
import Nav from "../components/client/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "VT - Services",
  description: "Les services de Viva Tremblant",
};

const Services = () => {
  return (
    <>
    <Nav />
    <main className="flex-grow items-center justify-between p-24">
      <div>nos services</div>
    </main>
    <Footer />
    </>
  );    
}

export default Services;

