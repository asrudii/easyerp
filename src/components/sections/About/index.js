import React from 'react';
import IlAbout from '../../../assets/img/about.svg';
import Title from '../../atoms/Title';

export default function About() {
  return (
    <div className="section-about" id="about">
      <Title title="ABOUT US" />
      <div className="aboutwrap">
        <div className="img-about">
          <img src={IlAbout} alt="illustrator about" />
        </div>
        <div className="dsc-about">
          <span>
            <strong>EASYERP</strong> merupakan perusahaan penyedia layanan
            enterprise resource planning, yang membantu bisniss anda dalam
            mencatat setiap barang yang masuk dan keluar serta memberikan
            laporan keuntungan bisnis anda.
          </span>
        </div>
      </div>
    </div>
  );
}
