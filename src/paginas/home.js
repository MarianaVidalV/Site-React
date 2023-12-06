import '../css/App.css';
import { Link } from 'react-router-dom';
import computador from '../imagens/computadorimage.png'

function Home() {
  return (
    <div className='body'>
      <header className="header">
        <a href="#" class="logo">Portifolio</a>
        <nav class="navbar">

        <a><Link to="/" className="active">Inicio</Link></a>
        <a><Link to="/sobre">Sobre mim</Link></a>
        <a><Link to="/linguagens">Linguagens</Link></a>
        <a><Link to="/matematica">Mat</Link></a>
        <a><Link to="/ch">CH</Link></a>
        <a><Link to="/cn">CN</Link></a>
        <a><Link to="/ti">TI</Link></a>
        <li className='dropdown'>
          <a href="">Tecnologias</a>

          <div class="dropdown-menu">
            <a><Link to="/automacao">Automação</Link></a>
            <a><Link to="/metaverso">MetaVerso</Link></a>
            <a><Link to="/realidadeaumentada">Realidade Aumentada</Link></a>
            <a><Link to="/inteligenciaartificial">Inteligência Artificial</Link></a>
            <a><Link to="/machinelearning">Machine Learning</Link></a>
          </div>
        </li>
      


        </nav>
        </header>
        <section class="home">
        <div class="home-content">
          <h1>Bem-vindo(a) ao Portifolio de Mariana.</h1><br/>
          <h1>Nele você encontrará uma seleção dos meus melhores trabalhos escolares, </h1>
          <h1>demonstrando minha capacidade em algumas aréas.</h1><br/>
          <p>Feito por uma aluna do Senac Nações Unidas</p>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images-principal">
            <img src={computador}/>
        </div>
      </section>
    </div>
    
  );
}

export default Home;
