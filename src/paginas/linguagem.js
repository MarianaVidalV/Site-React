import '../css/App.css';
import { Link } from 'react-router-dom';
import pixo from "../imagens/pixo.jpg"
import pop from "../imagens/pop.jpg"
import volei from "../imagens/volei.png"

function Linguagens() {
  return (
    <div className='body'>
      <header className="header">
        <a href="#" class="logo">Portifolio</a>
        <nav class="navbar">

        <a><Link to="/">Inicio</Link></a>
        <a><Link to="/sobre">Sobre mim</Link></a>
        <a><Link to="/linguagens" className="active">Linguagens</Link></a>
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
          <h1>Pixo</h1><br/>
          <h3>Pixo é Arte, pela recriação de códigos e elaboração que parte da escrita rúnica,<br/> mas também por ser uma ação politizada que confronta e mostra as contradições<br/>da cidade. Foi o trabalho mais divertido de todos, muito diferente e nunca<br/> imaginei que iria fazer algo assim</h3><br/>
          <h1>Pop Art</h1><br/>
          <h3>Pop Art é um movimento artístico que se caracteriza pela reprodução de temas <br/>relacionados ao consumo, publicidade e estilo de vida americano (american way of life).<br/> O termo em inglês significa "arte popular" e surgiu durante a década de 1950, na Inglaterra.<br/> Foi uma experiência muito legal e eu nunca tinha visto sobre, um dos meus favoritos</h3><br/>
<h1>Vôlei com lençol</h1><br/>
<h3>Voleibol de Lençol é uma atividade muito utilizada no ensino do Voleibol.<br/> É realizada em quadras esportivas, pátio da escola ou um espaço livre para desenvolvimento da atividade. Trabalho divertid, infelizmente tivemos apenas um dia, passamos muita raiva mas foi engraçado</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={pixo}/>
            <img src={pop}/>
            <img src={volei}/>
        </div>
      </section>
    </div>
    
  );
}

export default Linguagens;
