import Form from "../Form";
import { forwardRef } from "react";
import "./_contact.scss";

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="contact" id="Contact" ref={ref}>
      <div className="contact-header">
        <em>Say Hello</em>
        <h2>Contact</h2>
      </div>
      <div className="contact-body">
        <Form />
        <iframe
          className="google-map"
          title="Lover Point"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth"
          width="70%"
          height="300"
          loading="lazy"
          aria-label="Map showing location of Lover Point"
        ></iframe>
      </div>
    </div>
  );
});
export default Contact;
