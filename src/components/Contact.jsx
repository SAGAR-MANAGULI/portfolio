import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../styles/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sagar_contact",   // your service ID
        "template_tfe6fyi",         // 🔴 replace this
        form.current,
        "r5eLWSOzb6eK-_EHH"          // 🔴 replace this
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();   // 🔥 ADD THIS LINE HERE

        },
        () => {
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h4 className="contact-small">GET IN TOUCH</h4>

          <h1 className="contact-title">
            Let’s Work <span>Together</span> on Something Great
          </h1>

          <p className="contact-desc">
            Have a project in mind? Looking for a developer who focuses on clean code and scalable design?
            Feel free to reach out — I’ll respond as soon as possible.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> sagarmanaguli8@gmail.com</p>
            <p><strong>Phone:</strong> +91 8088452609</p>
            <p><strong>Location:</strong> India — Open to Opportunities</p>

            <div className="contact-socials">
              <a href="https://github.com/SAGAR-MANAGULI" target="_blank" rel="noreferrer">
                <FaGithub className="icon" /> GitHub
              </a>

              <a href="https://linkedin.com/in/sagarmanaguli" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" /> LinkedIn
              </a>
            </div>
          </div>
        </div>



        {/* RIGHT SIDE (FORM) */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>

            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message..." rows="5" required></textarea>
            <button type="submit">Send Message 🚀</button>

          </form>
        </div>

      </div>

    </section>
  );
}