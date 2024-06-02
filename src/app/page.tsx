'use client'

import Image from "next/image";
import AppLayout from "../components/AppLayout";
import { questrial } from "../lib/fonts";
import Form from "@/components/Form";

import { useForm, SubmitHandler } from "react-hook-form"

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
                <form action="" className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="firstName" className="font-medium">Nom *</label>
                    <input type="text" required id="firstName" name="nom" className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5 "/>
                  </div>
                  <div>
                    <label htmlFor="email" className="font-medium">Courriel *</label>
                    <input type="email" required id="email" name="courriel" pattern="^.+@.+\.[a-zA-Z]{2,63}$"    className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
                  </div>
                  <div>
                    <label htmlFor="city" className="font-medium">Ville</label>
                    <input type="text" id="city" name="ville" className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
                  </div>
                  <div>
                    <label htmlFor="situation" className="font-medium">Votre situation</label>
                    <div className="flex relative mt-2">
                      <select id="situation" name="situation" className=" block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 px-5 appearance-none">
                        <option value="buy">Propriétaire</option>
                        <option value="sell">Vacancier</option>
                        <option value="rent">Autre</option>
                      </select>
                      <div className="flex absolute top-0 right-5 w-3 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" aria-hidden="true"><path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center my-7">
                    <button type="submit" className=" bg-slate-900 text-white rounded-full p-4 w-1/2 ">
                      Envoyer
                    </button>
                  </div>
                </form>

                {/* <Form/> */}
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

