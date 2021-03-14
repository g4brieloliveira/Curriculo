import React from 'react';
import { Link } from "react-router-dom";

import Arrow from '../../assets/arrow.svg'
import './style.css'

function Header() {
  return (
    <div className="header">
      <a className="title" href="/">Bem-Vindo(a)!</a>
      <div className="links">
        <Link to="/">Início <img src={ Arrow } alt=""/></Link>
        <Link to="/studies">Estudos <img src={ Arrow } alt=""/></Link>
        <Link to="/experience">Experiência <img src={ Arrow } alt=""/></Link>
        <Link to="/about">Sobre mim <img src={ Arrow } alt=""/></Link>
      </div>
    </div>
  );
}

export default Header;
