import { useForm, SubmitHandler } from "react-hook-form"

//Contact.js//

   const encode = (data: { [x: string]: string | number | boolean; }) => {
    return Object.keys(data)
     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
     .join("&");
   };
   
   type FormInputs = {
    name: string;
    email: string;
    city: string;
    situation: string;
  };

   const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
     try {
       const response = await fetch("/__forms.html", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contactForm", ...data }),
       });
   
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
   
       alert("Success!");
     } catch (error) {
       alert(error);
     }
   };
    return (
      <form onSubmit={handleSubmit(onSubmit)} method="post" name="contact" className="flex flex-col gap-4">
      <input type="hidden" name="form-name" value="contact"/>

        <div>
          <label htmlFor="firstName" className="font-medium">Nom *</label>
          <input type="text" required id="name" {...register("name")}  className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5 "/>
        </div>
        <div>
          <label htmlFor="email" className="font-medium">Courriel *</label>
          <input type="email" required id="email" {...register("email")}  pattern="^.+@.+\.[a-zA-Z]{2,63}$"    className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
        </div>
        <div>
          <label htmlFor="city" className="font-medium">Ville</label>
          <input type="text" id="city" {...register("city")}  className="mt-2 block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 pl-5" />
        </div>
        <div>
          <label htmlFor="situation" className="font-medium">Votre situation</label>
          <div className="flex relative mt-2">
            <select id="situation" {...register("situation")}  className=" block w-full rounded-md border border-solid border-gray-500 bg-inherit min-h-11 p-1 px-5 appearance-none">
              <option value="proprietaire">Propriétaire</option>
              <option value="vacancier">Vacancier</option>
              <option value="autre">Autre</option>
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
    );
   };
   export default ContactForm;