import AppLayout from "../../components/AppLayout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description: "Les services de Viva Tremblant",
};

const Services = () => {
  return (
    <AppLayout>
      <div className="px-main-x-clamp">
        <div className="flex justify-center text-xl md:text-6xl">Nos Services</div>

        <div className="my-16">
        <hr />
          <div className="mx-5 my-10 flex">
            <Image 
              src={"/logoAirbnb.webp"}
              alt="logo airbnb"
              width={150}
              height={150}
              className="object-cover"
            />
            <div className="flex flex-col justify-center mx-10">
              <h2 className="text-2xl">Création de fiche Airbnb complète</h2>
            </div>
          </div>
        <hr />
        </div>
      </div>
    </AppLayout>
  );    
}

export default Services;

