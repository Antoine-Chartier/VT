import Layout from "../../components/Layout";
import { Metadata } from "next";
import Head from "next/head";
import Nav from "../../components/client/Nav";
import Footer from "../../components/Footer";
import { inter, josefin_slab } from "../../lib/fonts";

export const metadata: Metadata = {
  title: "Services",
  description: "Les services de Viva Tremblant",
};

const Services = () => {
  return (
    <Layout>
      <Nav />
      <main className="flex-grow items-center justify-between p-24">
        <div>nos services</div>
      </main>
      <Footer />
    </Layout>
  );    
}

export default Services;

