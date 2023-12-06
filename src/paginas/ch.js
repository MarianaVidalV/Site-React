import '../css/App.css';
import { Link } from 'react-router-dom';
import onu from "../imagens/onu.png"
import senamun from "../imagens/senamun.png"
import sufra from "../imagens/sufra.jpg"

function Ch() {
  return (
    <div className='body'>
      <header className="header">
        <a href="#" class="logo">Portifolio</a>
        <nav class="navbar">

        <a><Link to="/">Inicio</Link></a>
        <a><Link to="/sobre">Sobre mim</Link></a>
        <a><Link to="/linguagens">Linguagens</Link></a>
        <a><Link to="/matematica">Mat</Link></a>
        <a><Link to="/ch" className="active">CH</Link></a>
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
          <h1>Simulação da ONU</h1><br/>
          <h3>Fizemos um trabalho onde nós eramos países participando de uma <br/>
          reunião da ONU para tentar conseguirmos uma solução para refúgiados,<br/>
           tivemos várias intrigas e discussões interessantes, trabaho divertido <br/>
           e foi o único trabalho diferente de CH, então foi interessante.</h3><br/>
          <h1>Senamun</h1><br/>
          <h3>Foi o mesmo trabalho da simulação da ONU, porém com temas diferentes,<br/>
           pessoas diferentes e países diferentes, porém foi interessante,<br/>
           tinha pessoas de outras escola, achamos o noss injusto mas infelizmente acontece,<br/>
            foi bem tranquilo mas esparava mais desse trabalho. </h3><br/>
          <h1>Sufragistas</h1><br/>
          <h3>O movimento sufragista reivindicou os direitos <br/>
          políticos para as mulheres, mais especificamente, o direito de votar<br/>
           e de ser votada. Surgiu na Inglaterra, no século XIX, e alcançou o<br/>
            mundo no século XX, período em que a reivindicação foi atendida pela maioria dos países.<br/>
             Trabalho legal para ver um pouquinho das mulheres na história e assistimos um filme que é bem interressante, baseado em fatos reais.</h3>

          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={onu}/>
            <img src={senamun}/>
            <img src={sufra}/>
        </div>
      </section>
    </div>
    
  );
}

export default Ch;
