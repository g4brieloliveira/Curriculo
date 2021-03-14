import Header from "../../components/Header";
import Footer from "../../components/Footer";

import myPhoto from '../../assets/my_photo.jpeg'

import './style.css'

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <img src={ myPhoto } alt="Minha Foto"/>
        <h2>Gabriel Oliveira</h2>
        <h3>Front-End Developer</h3>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
