import React from 'react';
import Button from '../../atoms/Buttons';

export default function Card({ title, price, list }) {
  return (
    <div className="wrap-card-price">
      <div className="card-title">
        <h3>{title}</h3>
        <span className="total-price">Rp. {price}</span>
        <span className="time-price">per bulan</span>
      </div>
      <div className="card-content">
        <ul>
          {list.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <Button title="Order Now" type="primary-lg" />
      </div>
    </div>
  );
}
