import Image from "next/image";
import AppLayout from "../components/AppLayout";
import { questrial } from "../lib/fonts";

const Accueil = () => {
  return (
    <>
      <AppLayout>
          <div className="relative z-20">
            <h1 className={`${questrial.className} text-5xl bg-light-main dark:bg-dark-main inline`}>Une saison à la hauteur de vos attentes</h1>

            <div className="w-1/3 mt-3">
              <p className={`${questrial.className} text-xl bg-light-main dark:bg-dark-main inline`}>Découvrez nos chalets et condos de vacances impeccables pour une expérience mémorable à Mont-Tremblant. Toujours à votre disposition, toujours avec le sourire.</p>
            </div>


          </div>
          {/* <div  className="bg-red-50 relative">
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            <p>allo</p>
            allo
          </div> */}


      </AppLayout>
    </>

  );
}


export default Accueil;

