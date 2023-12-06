import '../css/App.css';
import { Link } from 'react-router-dom';
import cherno from "../imagens/cherno.jpg"
import inter from "../imagens/inter.png"
import agua from "../imagens/agua.jpg"

function Cn() {
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
        <a><Link to="/cn" className="active">CN</Link></a>
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
          <h1>Série Chernobyl</h1><br/>
          <h3>Assistimos a série Chernobyl para ver como tudo realmente aconteceu, a série é baseada em fatos reais e foi super divertido, depois fizemos<br/> algumas atividades sobre o acidente. Na manhã de 26 de abril de 1986,<br/> o núcleo do reator 4 da central nuclear de Chernobyl na Ucrânia<br/> da era soviética entrou em fusão e explodiu, causando o pior<br/> desastre nuclear da História. Os números oficiais de mortos<br/> continuam a ser 31 - aqueles que morreram naquela noite, dois funcionários<br/> da central e bombeiros.</h3><br/>
          <h1>Filme Interestelar</h1><br/>
<h3>Num cenário de catástrofe, o planeta Terra começa a sofrer com crises <br/>ambientais sérias. A solução encontrada pela NASA é descobrir outro planeta onde os humanos possam habitar.<br/> A missão de Cooper, ao lado de outros astronautas, é descobrir qual<br/> planeta será a nossa futura casa e salvar a humanidade. O filme é incrivel e se tornou um dos meus filmes favoritos,<br/> assisti muitas vezes depois das aulas, fizemos uma atividade em que tinhamos que <br/>explicar fisicamente sobre as coisas do filme e foi muito interessante.</h3><br/>
<h1>Filtro de água</h1><br/>
<h3>Uma maquete de filtrar água, no começo estava tudo indo bem, até que quase ocorre um<br/> acidente no laboratório, perdemos o acesso ao laboratório e tive que fazer em casa <br/>com uma colega, foi bem chato ninguém ter ajudado mas nós quisemos fazer e fizemos na minha<br/> casa mesmo, foi legal e todos ganharam nota mesmo com o problema, foi definitivamente um trabalho marcante</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={cherno}/>
            <img src={inter}/>
            <img src={agua}/>
        </div>
      </section>
    </div>
    
  );
}

export default Cn;
