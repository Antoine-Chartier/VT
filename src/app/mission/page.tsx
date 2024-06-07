import AppLayout from "@/components/AppLayout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À Propos",
  description: "La nature de Viva Tremblant",
};

const Mission = () => {
  return (
    <AppLayout>
      <div className="px-main-x-clamp mb-9">
        <h1 className="flex justify-center text-xl md:text-6xl">
          À Propos de Nous
        </h1>
      </div>
      <div className="relative w-full h-[_clamp(15em,35vw,30em)] mb-9">
        <Image
          src={"/paysage2.jpg"}
          alt="une image aérienne photoréaliste d'une ancienne forêt verdoyante parsemée de petites montagnes et de lacs."
          fill
          className="md:px-main-x-clamp object-cover"
          priority={true}
        />
      </div>
      <div className="mb-9 md:my-20 flex flex-col-reverse md:flex-row md:px-main-x-clamp">
        <div className="relative w-full h-[_clamp(13em,33vw,25em)]">
          <Image
            src={"/propertyManagement.jpg"}
            alt="iamge de nous"
            fill
            className="object-cover"
          />
        </div>
        <div className="px-main-x-clamp my-10">
          <h2 className="text-lg md:text-4xl my-4">Qui Nous Sommes</h2>
          <p className="text-lg">
            Nous sommes une entreprise spécialisée dans la gestion de propriétés
            au Mont-Tremblant, au cœur des Laurentides. Passionnés par la
            montagne et ses environs, nous sommes également amateurs de voyage
            et de découverte. <br />
            <b>Notre mission</b> est d'aider les propriétaires et les locataires{" "}
            <b>saisonniers</b> à trouver leur perle rare. Grâce à notre
            connaissance approfondie de la région et à notre engagement envers
            un service personnalisé, nous assurons à chacun une expérience
            unique et mémorable dans ce cadre naturel exceptionnel.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Mission;
