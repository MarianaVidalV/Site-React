import '../css/App.css';
import { Link } from 'react-router-dom';
import eu from "../imagens/eu.png"

function About() {
  return (
    <div className='body'>
      <header className="header">
        <a href="#" class="logo">Portifolio</a>
        <nav class="navbar">

        <a><Link to="/">Inicio</Link></a>
        <a><Link to="/sobre" className="active">Sobre mim</Link></a>
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
          <h1>Meu nome é Mariana Vidal, tenho 17 anos.</h1><br/>
          <h3>Atualmente estou terminando o Ensino Médio Técnico na área de TI no Senac<br/>
            e matrículada em ADS(Análise e desenvolvimento de Sistemas). </h3>
            <h3>Tenho conhecimento em:</h3><br/>
<h3> - Python</h3>
<h3> - Java</h3>
<h3> - SQLite</h3>
<h3> - Office</h3>
<h3> - React</h3><br/>
<h3>Tenho uma boa comunicação, ótima experiência em trabalho em equipe,<br/>
  fácil aprendizagem e interesse em programação</h3><br/>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images-principal">
          <img src={eu}/>
        </div>
      </section>
    </div>
    
  );
}

export default About;
