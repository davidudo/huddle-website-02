import ContactContent from "./ContactContent";

import logo_white from "../assets/images/logo-white.svg";
import location_icon from "../assets/images/icon-location.svg";
import phone_icon from "../assets/images/icon-phone.svg";
import email_icon from "../assets/images/icon-email.svg";

const contactData = [
  {
    id: 1,
    icon_url: location_icon,
    alt_text: "Location Icon",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    icon_url: phone_icon,
    alt_text: "Phone Icon",
    content: "+1-543-123-4567",
  },
  {
    id: 3,
    icon_url: email_icon,
    alt_text: "Mail Icon",
    content: "example@huddle.com",
  },
];

function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Footer Logo */}
        <img src={logo_white} className="logo" alt="Huddle White Logo" />

        <section>
          {/* Contact Container */}
          <div className="contact-container">
            {contactData.map((data) => {
              return (
                <ContactContent
                  key={data.key}
                  icon_url={data.icon_url}
                  alt_text={data.alt_text}
                  content={data.content}
                />
              );
            })}
          </div>

          {/* Footer Links */}
          <div className="link-container">
            <a href="/">About Us</a>
            <a href="/">What We Do</a>
            <a href="/">FAQ</a>
          </div>

          <div className="link-container">
            <a href="/">Career</a>
            <a href="/">Blog</a>
            <a href="/">Contact Us</a>
          </div>

          {/* Socials Section */}
          <div className="socials">
            <i className="fab fa-facebook fa-border"></i>
            <i className="fab fa-twitter fa-border"></i>
            <i className="fab fa-instagram fa-border"></i>
          </div>
        </section>

        {/* Copyright Footnote */}
        <div className="copyright-container">
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
