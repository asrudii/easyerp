import React from 'react';
import Metrics from '../../../assets/img/metrics.svg';
import bgTop from '../../../assets/img/bg-top.svg';
import bgBottom from '../../../assets/img/bg-bottom.svg';

export default function Home() {
  return (
    <div className="section-home" id="home">
      <img src={bgTop} width={300} className="bg-home" alt="bg-top" />
      <div className="content-wrap">
        <div className="first-title-wrap">
          <div className="first-title-box">
            <span>
              <strong>EASYERP</strong> mitra enterprise resource planning
              terbaik di indonesia
            </span>
            <br />
            <span>yang siap membantu bisnis anda berkembang lebih pesat</span>
          </div>
        </div>
        <div className="second-title-wrap">
          <span>"Manage bisnis anda, dan rasakan kemudahannya"</span>
          <img src={Metrics} width={400} height={200} alt="chart" />
        </div>
      </div>
      <img
        src={bgBottom}
        width={700}
        className="bg-home-bottom"
        alt="bg-bottom"
      />
    </div>
  );
}
