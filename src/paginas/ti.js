import '../css/App.css';
import { Link } from 'react-router-dom';
import redes from "../imagens/redes.jpg"
import banco from "../imagens/banco.jpg"
import react from "../imagens/react.jpg"

function Ti() {
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
        <a><Link to="/ti" className="active">TI</Link></a>
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
          <h1>Redes</h1><br/>
          <h3>A gente teve muita coisa sobre redes o bimestre todo, vimos IP, firewall,<br/>
          domínio, mexemos com linux, aprendemos a instalar linux, criar um servidor,<br/>
          sobre roteamento e muito mais, foi muito interessante pois era uma área que eu nunca pensei
          em mexer mas a gente fez muitas atividades divertidas e legais.<br/>Uma rede é a combinação
           de dois ou mais computadores e seus elos de conexão. <br/> Uma rede física é o hardware
           (equipamentos como adaptadores, cabos e linhas telefônicas) que compõe a rede.</h3><br/>
          <h1>Banco de dados</h1><br/>
          <h3>Mexemos com banco de dados no Access e no sql lite, foi um trabalho um pouco <br/>
          complicado mas depois desenvolvi bem, o mais dificil foi juntar o sql no <br/>
          código mas depois conseguimos, foi um trabalho divertido e até que eu gostei de SQL,
           foi muito interessante e não foi algo complexo, foi tranquilo para entender.</h3><br/>
          <h1>React</h1><br/>
          <h3>Eu gostei muito desse trabalho, apesar de não ter aprendido em sala de auula,<br/>
           vi muitos vídeos e pesquisei muito para fazer algumas coisas, pedi ajuda de amigos<br/>
            e consegui desenvolver bem, foi uma atividade que gostei muito, foi uma atividade<br/>
             que me surpreendeu mas foi tranquilo, não conseguia fazer em sala pois era muita<br/>
              desconcentração mas em casa conseguia fazer tudo, adorei explorar botões e tipos<br/>
               de textos no site.React é um framework JavaScript criado pelo Facebook (atual Meta)<br/>
                que é usado para criar interfaces de usuário (UI) em aplicativos web</h3><br/>
          <h3>HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web.<br/> Define o significado e a estrutura do conteúdo da web.<br/> Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.</h3>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/marividal/" target="_blank" ><i class='bx bxl-linkedin-square' ></i></a>
          </div>
        </div>
        <div className="images">
        <img src={redes}/>
            <img src={banco}/>
            <img src={react}/>
        </div>
      </section>
    </div>
    
  );
}

export default Ti;
