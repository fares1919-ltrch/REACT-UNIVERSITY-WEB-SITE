import { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d69273ec-b181-4ba4-af26-56c3eb7defcf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or 
                find our contact information below.Your feedback,
                questions, and suggestions are important to us as 
                we strive to provide the best experience for our 
                university community.
                </p>
            <ul>
                <li> <img src={mail_icon} alt="" />Fares.latrach20@gmail.com</li>
                <li><img src={phone_icon} alt="" />+216 50 216 993</li>
                <li><img src={location_icon} alt="" />Mahdia 5020 <br /> ISIMA ,Avenue Habib Bourguiba</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Your Name</label>
                <input type="text" id='name' name='name' placeholder='Enter your name' required/>
                <label htmlFor='phone'>Phone Number</label>
                <input type="text" id='phone' name='phone' placeholder='Enter your phone number' required/>
                <label htmlFor='email'>Your Email</label>
                <input type="email" id='email' name='email' placeholder='Enter your email' required/>
                <label htmlFor='message'>Write your message here</label>
                <textarea id='message' name='message' rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit'className='btn dark-btn'>Send Message <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact