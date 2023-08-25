import React from 'react';

const Banner = ({ text, button, btn_typ, btn_name, link }) => {
  return (
    <div className="banner">
      <p>{text}</p>
      {button && btn_typ === 'redirect' && (
        <a href={link} className="banner-button">
          {btn_name}
        </a>
      )}
    </div>
  );
};

export default Banner;
