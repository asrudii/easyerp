import React from 'react';
import Price from '../../organism/Price';
import Title from '../../atoms/Title';

export default function Pricing() {
  return (
    <div className="section-pricing" id="pricing">
      <Title title="OUR PRICING" />
      <Price />
    </div>
  );
}
