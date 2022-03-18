import React from 'react';
import Button from '../../atoms/Buttons';

export default function ContactForm() {
  return (
    <div className="form-contact-wrap">
      <div className="title-contact">
        <h3>Kirim Pesan</h3>
        <span>Kami disini untuk membantu anda!</span>
      </div>
      <form className="form">
        <div className="form-group">
          <label>Nama</label>
          <input type="text" placeholder="Masukkan nama kamu" />
        </div>
        <div className="form-group">
          <label>Alamat Email</label>
          <input type="text" placeholder="Masukkan email kamu" />
        </div>
        <div className="form-group">
          <label>Pesan</label>
          <textarea placeholder="Masukkan pesan kamu disini" />
        </div>
        <Button title="Kirim" type="primary" />
      </form>
    </div>
  );
}
