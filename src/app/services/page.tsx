import Layout from "../../components/AppLayout";
import { Metadata } from "next";
import Head from "next/head";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { inter, josefin_slab } from "../../lib/fonts";

export const metadata: Metadata = {
  title: "Services",
  description: "Les services de Viva Tremblant",
};

const Services = () => {
  return (
    <Layout>
      <main className="flex-grow items-center justify-between p-24">
        <div>nos services</div>
      </main>
    </Layout>
  );    
}

export default Services;

