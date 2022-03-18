import React from 'react';

export default function TItle({ title }) {
  return (
    <div className="section-title">
      <div>
        <h2>{title}</h2>
        <div className="decoration-title" />
      </div>
    </div>
  );
}
