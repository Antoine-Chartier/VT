"use client";
import { useForm, SubmitHandler } from "react-hook-form"

//Contact.js//

   const encode = (data: { [x: string]: string | number | boolean; }) => {
    return Object.keys(data)
     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
     .join("&");
   };
   
   type FormInputs = {
    champ: string;
    name: string;
    email: string;
    situation: string;
    city: string;
    destination: string;
    autre: string;
  };

   const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, setError, reset, watch } = useForm<FormInputs>();
    const situation = watch('situation');


    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
      console.log(data);
     try {
       const response = await fetch("/__forms.html", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contactForm", ...data }),
       });
   
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       reset(); // Reset form fields
     } catch (error : any) {
      setError("root", {
        type: error,
        message: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
      });
     }
   };
    return (
      <form onSubmit={handleSubmit(onSubmit)} method="post" name="contact" className="flex flex-col gap-4">
      <input type="hidden" name="form-name" value="contact"/>
      <input type="hidden" id="champ" {...register("champ")}/>

        <div>
          <label htmlFor="name" className="font-medium">Nom *</label>
          <input type="text" id="name" {...register("name", {required: 'Ce champs est requis'})} className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5 "/>
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email" className="font-medium">Courriel *</label>
          <input type="email" id="email" {...register("email", {required: 'Ce champs est requis'})}  pattern="^.+@.+\.[a-zA-Z]{2,63}$"    className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="situation" className="font-medium">Votre situation</label>
          <div className="flex relative mt-2">
            <select id="situation" {...register("situation")}  className=" block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 px-5 appearance-none">
              <option value="">...</option>
              <option value="proprietaire">Propriétaire</option>
              <option value="vacancier">Vacancier</option>
              <option value="autre">Autre</option>
            </select>
            <div className="flex absolute top-0 right-5 w-3 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.2828 4.89817" aria-hidden="true"><path d="M4.64116,4.89817a.5001.5001,0,0,1-.34277-.13574L.15727.86448A.50018.50018,0,0,1,.84282.136L4.64116,3.71165,8.44.136a.50018.50018,0,0,1,.68555.72852L4.98393,4.76243A.5001.5001,0,0,1,4.64116,4.89817Z"></path></svg>
            </div>
          </div>
        </div>
        {situation === 'proprietaire' && (
        <div>
          <label htmlFor="city" className="font-medium">Ville de la propriété</label>
          <input type="text" id="city" {...register("city")}  className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
        </div>
        )}
        {situation === 'vacancier' && (
        <div>
          <label htmlFor="destination" className="font-medium">Ville souhaitée</label>
          <input type="text" id="destination" {...register("destination")}  className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
        </div>
        )}
        {situation === 'autre' && (
        <div>
          <label htmlFor="autre" className="font-medium">Préciser votre demande</label>
          <textarea rows={3} id="autre" {...register("autre")}  className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
        </div>
        )}
        { errors.root && <span className="text-red-500">{errors.root.message}</span>}
        { isSubmitSuccessful && <span className="text-green-500">Merci pour votre intérêt, nous vous contacterons sous peu.</span>}
        <div className="flex justify-center my-7">
          <button type="submit"  className=" bg-slate-900 text-white rounded-full p-4 w-1/2 ">
            Envoyer
          </button>
        </div>
      </form>
    );
   };
   export default ContactForm;