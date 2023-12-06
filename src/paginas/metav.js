import '../css/App.css';
import { Link } from 'react-router-dom';
import metaverso from "../imagens/metaverso.jpg"

function MetaV() {
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
            <a><Link to="/metaverso" className="active">MetaVerso</Link></a>
            <a><Link to="/realidadeaumentada">Realidade Aumentada</Link></a>
            <a><Link to="/inteligenciaartificial">Inteligência Artificial</Link></a>
            <a><Link to="/machinelearning">Machine Learning</Link></a>
          </div>
        </li>
      


        </nav>
        </header>
        <section class="home">
        <div class="home-content">
          <h1>Metaverso</h1><br/>
          <h3>O metaverso é um universo virtual onde as pessoas podem
          interagir entre si por meio de avatares personalizados.<br/> É considerado uma espécie de Internet 3D imersiva, na qual comunicação, lazer e negócios
            existem de forma interoperável.</h3><br/>
            <h3>O metaverso propõe uma nova forma de nos relacionarmos e entender a vida por meio da tecnologia. A evolução tecnológica, em uma incansável busca por<br/>
             encontrar novas formas de conforto e entretenimento, é constante no mundo atual.</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={metaverso}/>
        </div>
      </section>
    </div>
    
  );
}

export default MetaV;