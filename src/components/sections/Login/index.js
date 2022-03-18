import React from 'react';
import Button from '../../atoms/Buttons';
import { FiX } from 'react-icons/fi';

export default function Login() {
  const closeBtn = () => {
    document
      .getElementsByClassName('section-login')[0]
      .classList.remove('show');
  };
  return (
    <div className="section-login">
      <div className="login-wrap">
        <div className="header-login">
          <span className="title-login">LOGIN</span>
          <FiX size={30} className="close-btn" onClick={closeBtn} />
        </div>
        <form className="form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Masukkan email kamu" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Masukkan password kamu" />
          </div>
          <Button title="Masuk" type="primary" />
        </form>
      </div>
      <div className="bg-login" />
    </div>
  );
}
