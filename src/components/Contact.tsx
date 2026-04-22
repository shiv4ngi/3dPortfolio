import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:alaapdhall9@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                alaapdhall9@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/alaapdhall/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — alaapdhall
              </a>
            </p>
            <p>
              +91 8851920431
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/alaapdhall/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Alaap Dhall</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
