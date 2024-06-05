
import { useState } from "react";

//Contact.js//
  const encode = (data: { [x: string]: string | number | boolean; }) => {
    return Object.keys(data)
     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
     .join("&");
   };

   const ContactForm = () => {
    const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
    });
   const handleSubmit = (e: { preventDefault: () => void; }) => {
     e.preventDefault();
     fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formData }),
     })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    };
   const handleChange = (e: { target: { name: any; value: any; }; }) => {
     const { name, value } = e.target;
     
     setFormData((prevData) => ({
       ...prevData,
       [name]: value,
      }));
      console.log(formData);
    };
    return (
     <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} method="post" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <div>
       <label htmlFor="name">Name</label>
       <input type="text" id="name" name="name" onChange={handleChange}/>
      </div>
      <div>
       <label htmlFor="email">Email</label>
       <input type="email" id="email" name="email" onChange={handleChange} />
      </div>
      <div>
       <label htmlFor="message">Message</label>
       <textarea id="message" name="message" onChange={handleChange} ></textarea>
      </div>
      <button type="submit">Submit</button>
      </form>
     </div>
    );
   };
   export default ContactForm;