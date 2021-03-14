import React from 'react';
import Heart from '../../assets/heart.svg'

import './style.css'

function Footer() {
  return (
    <footer>
      <p>Feito com <img src={ Heart } alt=""/> por Gabriel Oliveira</p>
    </footer>
  );
}

export default Footer;
