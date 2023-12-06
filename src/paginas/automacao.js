import '../css/App.css';
import { Link } from 'react-router-dom';
import automacao from "../imagens/automacao.jpg"

function Auto() {
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
            <a><Link to="/automacao" className="active">Automação</Link></a>
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
          <h1>Automação</h1><br/>
          <h3>É o uso de sistemas de controle e de tecnologias da informação para
          reduzir a necessidade de trabalho humano para a produção de<br/>
          equipamentos e serviços.</h3><br/>
          <h3>Automação é o emprego de técnicas computadorizadas ou mecânicas que
          usam comandos programados para realizar tarefas. É muito utilizada na indústria,<br/>
           em linhas de produção. Porém, também pode ser empregada em diversas outras áreas,
           sempre resultando em diminuição de custos e aumento da produtividade.</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={automacao}/>
        </div>
      </section>
    </div>
    
  );
}

export default Auto;