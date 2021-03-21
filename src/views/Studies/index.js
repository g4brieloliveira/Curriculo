import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import './style.css'

function Studies() {
  return (
    <div className="studies">
      <Header />
      <div className="content">
        <div className="institutions">
          <p>Instituições de ensino</p>
          <Card iDo="Ensino Médio Técnico" local="IFMG" description="De 2019 até 2021 fiz o meu ensino médio juntamente ao tecnico em informática no Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais no Campus Ribeirão das Neves"/>
        </div>
        <div className="courses">
          <p>Cursos</p>
          <Card iDo="Curso" local="Udemy" description="Em janeiro de 2021 adquiri um curso Fullstack na Udemy em que fiz um projeto completo fazendo a prototipação com o Adobe XD, o desenvolvimento no Backend de uma API utilizanto NodeJs e MongoDB, o desenvolvimento do Frontend com ReactJS e o desenvolvimento da versão mobile com React Native"/>
          <Card iDo="Curso" local="Rock University" description="Em setembro de 2020 fiz o curso de SEO da Rock Content em que aprendi sobre maneiras de obter melhor rankeamento em indexadores como o Google"/>
          <Card iDo="Curso" local="JA Brasil" description="Em agosto de 2020 fiz o curso Meu Primeiro Site da Junior Achievement Brasil no qual aprendemos sobre criação de sites com HTML e CSS"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Studies;
