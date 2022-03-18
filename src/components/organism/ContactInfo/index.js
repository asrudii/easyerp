import React from 'react';
import Logo from '../../../assets/img/logo.svg';
import Contact from '../../../assets/img/contact.svg';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function ContactInfo() {
  return (
    <div className="contact-info-wrap">
      <div className="nav-logo">
        <img src={Logo} width={50} alt="logo" />
        <span>EASYERP</span>
      </div>
      <div className="contact-info-content">
        <img src={Contact} alt="Illustrator contact" />
        <div className="list-info">
          <div className="info-group">
            <FiMapPin size={25} />
            <span>Jl. Rendh No.23 Bandung Barat</span>
          </div>
          <div className="info-group">
            <FiPhone size={25} />
            <span>+62 82878917971</span>
          </div>
          <div className="info-group">
            <FiMail size={25} />
            <span>easyerp@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
