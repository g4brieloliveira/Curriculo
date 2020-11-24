import './App.css';

import Header from './components/Header';
import Apresentation from './components/Apresentation';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentation />
      <Cards />
      
      <footer>
        <div className="credits">
          <p>Logos retiradas do site <a href="https://www.flaticon.com">Flaticon</a></p>
        </div>
        <div className="text">
          <p>Feito com <img src="https://www.flaticon.com/svg/static/icons/svg/25/25424.svg" alt="Coração/Amor"/> por Gabriel Oliveira</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
