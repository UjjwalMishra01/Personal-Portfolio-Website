import React from 'react'
import "./Contact.css";
import Swal from 'sweetalert2'

const Contact = () =>
{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "23b69328-9643-4961-b447-4285cf583ca9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                text: "Thanks for contacting.",
                icon: "success"
              });
        }
      };

    return(
    <section className='contact'>
        <form onSubmit={onSubmit}> 
            <h2>Contact Form</h2>
            <div className='input-box'>
                <label>Name:</label>
                <input type='text' className='field' name='name' placeholder='Enter Your Name' required/>
            </div>

            <div className='input-box'>
                <label>E-mail:</label>
                <input type='text' className='field'  name='email' placeholder='Enter Your Email' required/>
            </div>

            <div className='input-box'>
                <label>Your message:</label>
                <textarea name='message' className='fieldmess' id='' placeholder='Enter Your Message' required/>
            </div>

            <button type='submit'>Send Message</button>

        </form>
    </section>

    );
}


export default Contact;