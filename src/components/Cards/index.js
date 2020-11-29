import React from 'react';

import './main.css'

function Cards () {
  return (
    <div className="cards-total">
      
      <div className="cards-container">
        <div className="about-me">
        <h2>Sobre Mim</h2>
        <p>Meu nome é Gabriel Oliveira, tenho 18 anos e sou estudante de Técnico em Informática pelo IFMG - Campus Ribeirão das Neves. <br/><br/>

          Atualmente estou estudando o que posso sobre Desenvolvimento Web (focando na stack JS) principalmente que envolvam o universo do React.</p>
        </div>

        <div className="curriculo">
          <p>Acessar currículo</p>
          <a href="https://drive.google.com/file/d/1bMc3zs-P72lnm7Ttss_PKto2nNk-1C1I/view?usp=sharing" download="Gabriel_Oliveira"><img src="https://www.flaticon.com/svg/static/icons/svg/2427/2427461.svg" alt="currículo"/></a>
        </div>
      </div>
    </div>
  )
}

export default Cards;