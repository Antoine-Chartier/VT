import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const Accueil = () => {
  return (
    <>
      <div className="w-full h-screen absolute top-0">
        <Image
          src="/images/Parc-national-du-Mont-Tremblant.jpg"
          alt="hero image du Mont-Tremblant l'été"
          fill
          className="object-cover z-0"
          priority={true}
        />
      </div>
        <div className="relative z-20 text-center md:text-left mt-16  sm:px-main-x-clamp">
          <h1 className="text-5xl bg-main inline">
            Une saison à la hauteur de vos attentes
          </h1>
          <div className="md:w-1/3 mt-3 text-center md:text-left">
            <p className="text-2xl bg-main inline">
              Découvrez nos chalets et condos de vacances impeccables pour une
              expérience mémorable à Mont-Tremblant. Toujours à votre
              disposition, toujours avec le sourire.
            </p>
          </div>
        </div>

        <section className="relative z-20 mt-16 px-main-x-clamp dark:text-text-primaryDarkMode">
          <div className="bg-secondary rounded-xl px-4 py-10 md:w-1/2 md:min-w-96 2xl:w-2/5 ml-auto">
            <div>
              <h1 className="text-center text-3xl text-pretty leading-10 xl:mx-24">
                Demandez-nous conseils pour votre propriété ou votre séjour!
              </h1>
              <h2 className="text-center leading-8">Contactez-nous</h2>
            </div>

            <div className="mt-10 md:mx-5 xl:10">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="relative mt-24 md:p-main-clamp">
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
        </section>
    </>
  );
};

export default Accueil;
