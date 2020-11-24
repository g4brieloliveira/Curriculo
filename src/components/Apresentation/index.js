import React from 'react';

import './main.css'

function Apresentation () {
  return (
    <div className="total">
      <div className="container">
        <img src="https://avatars2.githubusercontent.com/u/66377006?s=460&u=4f7d28c528f51b09668884c1ffc59404cbb4ed36&v=4" alt=""/>
        <div className="texts">
          <div className="hello">
            <p>Olá, seja bem-vindo(a)</p>
            <h1>Meu nome é <span>Gabriel Oliveira</span></h1>
            <h2>Estudante de Desenvolvimento Web</h2>
          </div>
          <div className="informations">
            <p><strong>Idade: </strong>18</p>
            <p><strong>Email: </strong>g4bri3l.0lv@gmail.com</p>
            <p><strong>Idade: </strong>18</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apresentation;