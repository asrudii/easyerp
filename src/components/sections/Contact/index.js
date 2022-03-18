import React from 'react';
import TItle from '../../atoms/Title';
import ContactForm from '../../organism/ContactForm';
import ContactInfo from '../../organism/ContactInfo';

export default function Contact() {
  return (
    <div className="section-contact" id="contact">
      <TItle title="CONTACT US" />
      <div className="contact-wrap">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
