import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const Accueil = () => {
  return (
    <>

      <div className="h-screen">
        {/* image hero */}
        <div className="w-full h-screen absolute top-0">
          <Image
            src="/chaletHiverGenerique.webp"
            alt="hero image du Mont-Tremblant l'été"
            fill
            className="object-cover z-0"
            priority={true}
          />
        </div>
        {/* Text hero */}
        <div className="relative z-20 text-center md:text-left mt-16  sm:px-main-x-clamp">
          <h1 className="text-5xl bg-main inline">
            Recherche condo / chalet à louer cet hiver. <br /> Location pour la
            saison.
          </h1>
          <div className="md:w-1/3 mt-3 text-center md:text-left">
            <p className="text-2xl bg-main inline">
              Revenu à la hauteur de vos attentes.
            </p>
          </div>
        </div>
        {/* Form hero */}
        <section className="relative z-20 mt-16 px-main-x-clamp dark:text-text-primaryDarkMode">
          <div className="bg-secondary rounded-xl px-4 py-10 md:w-1/2 md:min-w-96 2xl:w-2/5 ml-auto">
            <div>
              <h1 className="text-center text-3xl text-pretty leading-10 xl:mx-24">
                Questions sur la location de votre propriété?
              </h1>
              <h2 className="text-center leading-8">Contactez-nous</h2>
            </div>
            <div className="mt-10 md:mx-5 xl:10">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      {/* // Revenu Potentiel */}
      <section className="mt-24 md:p-main-clamp">
        <div>
          <h1 className="text-2xl md:text-4xl my-4 md:my-8 h-full">
            Revenu potentiel
          </h1>
          <div className="flex flex-col gap-4 md:flex-row dark:text-text-primaryDarkMode">
            <div className="bg-secondary p-10 flex-1">
              <div className="mb-7 text-4xl xl:text-5xl ">
                <h2>1 chambre </h2>
              </div>
              <div>
                <p>À partir de:</p>
              </div>
              <div>
                <h2 className="text-2xl mb-4 mt-5">
                  7 500$ - <b>10 000$</b> / saison hivernale
                </h2>
                <h2 className="text-2xl mb-4 mt-5">5 000$ / saison estivale</h2>
              </div>
            </div>

            <div className="bg-secondary p-10 flex-1">
              <div className="mb-7 text-4xl xl:text-5xl ">
                <h2>2 chambres </h2>
              </div>
              <div>
                <p>À partir de:</p>
              </div>
              <div>
                <h2 className="text-2xl mb-4 mt-5">
                  <b>12 000$</b> / saison hivernale
                </h2>
                <h2 className="text-2xl mb-4 mt-5">7 000$ / saison estivale</h2>
              </div>
            </div>

            <div className="bg-secondary p-10 flex-1">
              <div className="mb-7 text-4xl xl:text-5xl ">
                <h2>3 chambres et +</h2>
              </div>
              <div>
                <p>À partir de:</p>
              </div>
              <div>
                <h2 className="text-2xl mb-4 mt-5">
                  14 000$ - <b>20 000$</b> / saison hivernale
                </h2>
                <h2 className="text-2xl mb-4 mt-5">
                  10 000$ / saison estivale
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-96 p-main-clamp md:pt-28">
        <Image
          src={"/log-cabin-aFrame-drawing.jpg"}
          alt="image d'un chalet"
          width={338}
          height={338}
          className="object-cover m-auto md:m-0"
        />
      </div>

      {/* <section className="relative mt-24 md:p-main-clamp">
          <div>
            <h1 className="text-center md:text-left text-2xl md:text-4xl my-4 md:my-8 h-full">
              Clients Satisfaits
            </h1>
            <div className="flex flex-col gap-4 md:flex-row dark:text-text-primaryDarkMode">
              <div className="bg-secondary p-10 flex-1">
                <div className="w-24 h-10">
                  <svg
                    data-bbox="20 87.427 160 25.146"
                    viewBox="20 87.427 160 25.146"
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="five out of five"
                  >
                    <path
                      fill="#010203"
                      d="m33.22 87.427 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635L20 97.032l10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635-8.262-5.906 10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078zm33.39 0 3.064 9.683L180 97.032l-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 mt-5">
                    « Des vacances parfaites! »
                  </h2>
                  <p className="my-4">
                    « J&apos;ai passé un séjour incroyable dans l&apos;un des chalets de
                    Viva Tremblant. Les services étaient impeccables et l&apos;équipe
                    était très professionnelle. »
                  </p>
                  <p className="">Sophie Dufort, QC</p>
                </div>
              </div>
              <div className="bg-secondary p-10  flex-1">
                <div className="w-24 h-10">
                  <svg
                    data-bbox="20 87.427 160 25.146"
                    viewBox="20 87.427 160 25.146"
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="five out of five"
                  >
                    <path
                      fill="#010203"
                      d="m33.22 87.427 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635L20 97.032l10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635-8.262-5.906 10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078zm33.39 0 3.064 9.683L180 97.032l-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 mt-5">
                    « Expérience inoubliable »
                  </h2>
                  <p className="my-4">
                    « Les chalets de Viva Tremblant offrent une expérience de
                    vacances inoubliable. Je recommande vivement leurs services.
                    »
                  </p>
                  <p className="">Jean-François Bouchard, QC</p>
                </div>
              </div>
              <div className="bg-secondary p-10 flex-1">
                <div className="w-24 h-10">
                  <svg
                    data-bbox="20 87.427 160 25.146"
                    viewBox="20 87.427 160 25.146"
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="five out of five"
                  >
                    <path
                      fill="#010203"
                      d="m33.22 87.427 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635L20 97.032l10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635-8.262-5.906 10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078zm33.39 0 3.064 9.683 10.156-.078-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078zm33.39 0 3.064 9.683L180 97.032l-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl mb-4 mt-5">
                    « Magnifique vue sur le lac! »
                  </h2>
                  <p className="my-4">
                    « J&apos;ai loué un condo avec une vue imprenable sur le lac.
                    C&apos;était comme vivre dans un rêve. »
                  </p>
                  <p className="">Marc Dubois, ON</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
    </>
  );
};

export default Accueil;
