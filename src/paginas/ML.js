import '../css/App.css';
import { Link } from 'react-router-dom';
import ml from "../imagens/ml.jpg"

function MachineL() {
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
            <a><Link to="/realidadeaumentada">Realidade Aumentada</Link></a>
            <a><Link to="/inteligenciaartificial">Inteligência Artificial</Link></a>
            <a><Link to="/machinelearning" className="active">Machine Learning</Link></a>
          </div>
        </li>
      


        </nav>
        </header>
        <section class="home">
        <div class="home-content">
          <h1>Machine Learning</h1><br/>
          <h3>Machine Learning é uma disciplina da área da Inteligência Artificial que,<br/> por meio de algoritmos, dá aos computadores a capacidade de identificar padrões em dados massivos e fazer previsões (análise preditiva).</h3><br/>
          <h3>É conhecida como uma técnica voltada para implementar o machine learning.<br/> Ela treina computadores para realizarem atividades como seres humanos.<br/> Grandes exemplos disso são o reconhecimento de fala, a identificação de imagens, o reconhecimento facial ou de expressões faciais, entre outros</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={ml}/>
        </div>
      </section>
    </div>
    
  );
}

export default MachineL;