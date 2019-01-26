import React from 'react';

const Footer = ({ previous, next, fetchNext, loading }) => {
  const Button = (text, route) => {
    if (route && !loading) {
      return (
        <button
          type="button"
          disabled={loading}
          onClick={() => fetchNext(route)}
        >
          {text}
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {Button('Prev', previous)}
      {Button('Next', next)}
    </div>
  );
};

export default Footer;
