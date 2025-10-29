import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3166b35e-3cdb-49ec-b610-40f8034ebf26",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact_title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Let’s connect and create something amazing together!</p>
                <div className="contact-detailes">
                    <div className="contact-detaile">
                        <img src={mail_icon} alt="" /><p>akash.pa.anandan12@gmail.com</p>
                    </div>
                     <div className="contact-detaile">
                        <img src={call_icon} alt="" /><p>+91 7025236540</p>
                    </div>
                     <div className="contact-detaile">
                        <img src={location_icon} alt="" /><p>Kerala,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange}/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your email' name='email' value={formData.email} onChange={handleChange} />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
                <button type='submit' className='contact-submit' disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit now"}</button>

            </form>
        </div>

    </div>
  )
}

export default Contact