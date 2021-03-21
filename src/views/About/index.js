import Header from "../../components/Header";
import Footer from "../../components/Footer";

import myPhoto from '../../assets/my_photo.jpeg'
import curriculum from '../../assets/01_GabrielOliveira_.pdf'

import '../About/style.css'

function About() {
  return (
    <div className="about">
      <Header />
      <h1>Sobre mim</h1>
      <div className="aboutContent">
        <img src={ myPhoto } alt="Minha foto"/><p>Olá, meu nome é Gabriel Augusto de Oliveira, sou de Belo Horizonte - MG, curso Técnico em Integrado em Informática no IFMG campus Ribeirão das Neves e me formo no final de 2021.</p>
        <p className="text">Comecei na área de programação com a linguagem Python em 2018 fazendo cursos e assistindo a vídeos no YouTube. 
          <br></br><br></br>Em 2020 comecei a estudar mais sobre desenvolvimento de aplicações para web utilizando HTML, CSS e JavaScript e ao final do mesmo ano comecei a me aprofundar em frameworks e libs para criar essas aplicações e foi onde tive meu primeiro contato com React, atualmente estou estudando principalmente o Front End e também fazendo alguns cursos Full Stack seguindo a stack do JavaScript (ReactJS, React Native e Node). 
          <br></br><br></br>Juntamente com meu conhecimento técnico eu venho aprimorando e aprofundando meu conhecimento da língua inglesa através de podcasts e músicas, atualmente já consigo entender uma conversa entre nativos e estou começando a desenvolver também minha fala. 
          <br></br><br></br>Meu atual objetivo é conseguir o meu primeiro emprego na área com alguma vaga de Estágio ou como Desenvolvedor Júnior e meu GitHub está disponível em: <a href="https://github.com/g4brieloliveira">https://github.com/g4brieloliveira</a>
          <br></br><br></br>Para entrar em contato comigo pode ser via chat privado do LinkedIn ou pelo email: <a href = "mailto: g4brieloliveira.dev@gmail.com">g4brieloliveira.dev@gmail.com</a></p>
        <a href={ curriculum } className="download" download>Download do meu currículo <img src="https://www.flaticon.com/svg/static/icons/svg/2427/2427461.svg" alt=""/></a>
      </div>
      <Footer />
    </div>
  );
}

export default About;
