import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/App.css';

import Home from './paginas/home'
import About from './paginas/about'
import Linguagens from './paginas/linguagem'
import Matematica from './paginas/matematica'
import CH from './paginas/ch'
import CN from './paginas/cn'
import Ti from './paginas/ti'
import Auto from './paginas/automacao'
import MetaV from './paginas/metav'
import RealidadeA from './paginas/RA'
import InteligenciaA from './paginas/IA'
import MachineL from './paginas/ML'

function App(){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<About/>}/>
        <Route path="/linguagens" element={<Linguagens/>}/>
        <Route path="/matematica" element={<Matematica/>}/>
        <Route path="/ch" element={<CH/>}/>
        <Route path="/cn" element={<CN/>}/>
        <Route path="/ti" element={<Ti/>}/>
        <Route path="/automacao" element={<Auto/>}/>
        <Route path="/metaverso" element={<MetaV/>}/>
        <Route path="/realidadeaumentada" element={<RealidadeA/>}/>
        <Route path="/inteligenciaartificial" element={<InteligenciaA/>}/>
        <Route path="/machinelearning" element={<MachineL/>}/>
      </Routes>
    </Router>
  );
}

export default App;