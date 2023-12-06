import '../css/App.css';
import { Link } from 'react-router-dom';
import poke from "../imagens/poke.png"

function RealidadeA() {
  return (
    <div className='body'>
      <header className="header">
        <a href="#" class="logo">Portifolio</a>
        <nav class="navbar">

        <a><Link to="/">Inicio</Link></a>
        <a><Link to="/sobre">Sobre mim</Link></a>
        <a><Link to="/linguagens">Linguagens</Link></a>
        <a><Link to="/matematica">Mat</Link></a>
        <a><Link to="/ch">CH</Link></a>
        <a><Link to="/cn">CN</Link></a>
        <a><Link to="/ti">TI</Link></a>
        <li className='dropdown'>
          <a href="" className="active">Tecnologias</a>

          <div class="dropdown-menu">
            <a><Link to="/automacao">Automação</Link></a>
            <a><Link to="/metaverso">MetaVerso</Link></a>
            <a><Link to="/realidadeaumentada" className="active">Realidade Aumentada</Link></a>
            <a><Link to="/inteligenciaartificial">Inteligência Artificial</Link></a>
            <a><Link to="/machinelearning">Machine Learning</Link></a>
          </div>
        </li>
      


        </nav>
        </header>
        <section class="home">
        <div class="home-content">
          <h1>Realidade aumentada</h1><br/>
          <h3>A Realidade Aumentada (RA) é uma tecnologia que permite sobrepor elementos<br/>
          virtuais à nossa visão da realidade. Cada vez mais demandada, essa tecnologia se converterá<br/>
          em um negócio que vai movimentar, em 2020, cerca de 120 bilhões de dólares
          no mundo. Aplicação da Realidade Aumentada na área da saúde.</h3><br/>
          <h3>A realidade aumentada é uma versão aprimorada e interativa de um ambiente real obtido<br/>
           por meio de elementos visuais, sonoros e outros estímulos sensoriais digitais por meio de<br/>
            tecnologia holográfica.</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={poke}/>
        </div>
      </section>
    </div>
    
  );
}

export default RealidadeA;