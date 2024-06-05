import AppLayout from "../components/AppLayout";
import { questrial } from "../lib/fonts";

import ContactForm from "@/components/ContactForm";



const Accueil = () => {

   
  return (
    <>
      <AppLayout>
          <div className="relative z-20 text-center md:text-left mt-16">
            <h1 className={`${questrial.className} text-5xl bg-light-main dark:bg-dark-main inline`}>Une saison à la hauteur de vos attentes</h1>
            <div className="md:w-1/3 mt-3 text-center md:text-left">
              <p className={`${questrial.className} text-xl bg-light-main dark:bg-dark-main inline`}>Découvrez nos chalets et condos de vacances impeccables pour une expérience mémorable à Mont-Tremblant. Toujours à votre disposition, toujours avec le sourire.</p>
            </div>
          </div>

          <section className="relative mt-16">
            <div className="bg-light-secondary dark:bg-dark-secondary dark:text-dark-main rounded-xl px-4 py-10">
              <div className={`${questrial.className}`}>
                <h1 className="text-center text-2xl text-pretty">Demandez-nous conseils pour votre propriété ou votre séjour!</h1>
                <h3 className="text-center">Contactez-nous</h3>
              </div>
              <div className={`${questrial.className} mt-10`}>

                <ContactForm />

              </div>
            </div>
          </section>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
                <h1 className="text-center">Nos propriétés</h1>
              </div>
            </div>
          </div>

      </AppLayout>
    </>

  );
}


export default Accueil;

