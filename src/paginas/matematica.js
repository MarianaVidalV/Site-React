import '../css/App.css';
import { Link } from 'react-router-dom';
import teodolito from "../imagens/teodolito.png"
import forms from "../imagens/forms.png"
import ef from "../imagens/ef.png"

function Matematica() {
  return (
    <div className='body'>
      <header className="header">
        <a href="#" class="logo">Portifolio</a>
        <nav class="navbar">

        <a><Link to="/">Inicio</Link></a>
        <a><Link to="/sobre">Sobre mim</Link></a>
        <a><Link to="/linguagens">Linguagens</Link></a>
        <a><Link to="/matematica" className="active">Mat</Link></a>
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
            <h1>Teodolito</h1><br/>
            <h3>Fizemos um teodolito para medirmos estruturas do senac fazendo<br/> 
              contas de seno e cosseno, foi uma atividade diferente e muito legal de fazer.<br/>
              O teodolito é um instrumento de precisão óptico que mede ângulos verticais <br/>
              e horizontais, como nós não tinhamos, nós fizemos um tedeolito caseiro, com transferidor,<br/>
              barbante e canudo, tinhamos que medir as estruturas que escolhemos.</h3><br/>
              <br/>
              <h1>Educação Financeira</h1><br/>
              <h3>Foi uma aula diferente em que foi sorteada uma familia com problema financeiro para cada grupo,<br/>
                tivemos que solucionar o problema da familia com forme a realidade, a familia que eu peguei acabou tendo<br/>
                muitos problemas e depois de umas soluções, veio o problema surpresa, o que acabou arruinando todas nossas<br/>
                soluções, foi um trabalho marcante pois foi bem complicado, tivemos que fazer muitas pesquisas e procurar<br/>
                alguns tipos de ajuda finaceira, foi um trabalho divertido e bem complexo</h3><br/>
                <br/>
                <h1>Forms estatísticas</h1>
                <h3>Começamos escolhendo um tema para nosso forms, e decidimos que seria "A IA nos estudos", após isso<br/>
                criamos o forms e tivemos que fazer uma pesquisa de campo á procura de pessoas para responder nosso forms<br/>
                para fazermos uma estatísticas de quantas pessoas acham que a IA atrapalha no estudo e etc, foi uma atividade<br/>
                diferente e foi bem legal ver opiniões de pessoas diferentes, foi um trabalho interessante.</h3>
                
            <div className="home-sci">
              <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
            </div>
          </div>
          <div class="images">
            <img src={teodolito}/>
            <img src={ef}/>
            <img src={forms}/>
          </div>
      </section>
    </div>
    
  );
}

export default Matematica;
