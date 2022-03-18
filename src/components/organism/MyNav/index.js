import React from 'react';
import Button from '../../atoms/Buttons';
import Logo from '../../../assets/img/logo.svg';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MyNav() {
  const loginBtn = () => {
    document.getElementsByClassName('section-login')[0].classList.add('show');
  };

  const menuBtn = () => {
    document.getElementsByClassName('nav-link')[0].classList.add('show');
  };

  const closeBtn = () => {
    document.getElementsByClassName('nav-link')[0].classList.remove('show');
  };

  return (
    <div className="mynav">
      <a className="nav-logo" href="#home">
        <img src={Logo} width={50} alt="logo" />
        <span>EASYERP</span>
      </a>
      <div className="hamburger-menu">
        <FiMenu size={40} onClick={menuBtn} />
      </div>
      <div className="nav-link">
        <FiX size={30} className="close-btn-nav" onClick={closeBtn} />
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#pricing">PRICING</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <Button onClick={loginBtn} title="LOGIN" type="outline" />
          </li>
        </ul>
      </div>
    </div>
  );
}
