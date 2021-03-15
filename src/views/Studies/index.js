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
          <Card iDo="Ensino Médio" local="IFMG" description="Sint magna ex minim culpa ipsum irure et ullamco excepteur est ea excepteur."/>
        </div>
        <div className="divider"></div>
        <div className="courses">
          <p>Cursos</p>
          <Card iDo="Curso" local="Udemy" description="Cillum incididunt exercitation excepteur magna incididunt. Deserunt anim culpa laboris sit aliquip eiusmod dolore nulla elit anim. Ut aute et qui proident nulla ex labore eu ex consectetur veniam id."/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Studies;
