import React from 'react';

export default function Button({ title, type, onClick }) {
  if (type === 'outline') {
    return (
      <>
        <button onClick={onClick} className="primary-line">
          {title}
        </button>
      </>
    );
  } else if (type === 'primary') {
    return (
      <>
        <button onClick={onClick} className="primary-btn">
          {title}
        </button>
      </>
    );
  } else if (type === 'primary-lg') {
    return (
      <>
        <button onClick={onClick} className="primary-btn-lg">
          {title}
        </button>
      </>
    );
  }
}
