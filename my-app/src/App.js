import './index.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes as Routes } from 'react-router-dom'
import Transferencias from './pages/Transferencias/Transferencias';
import Extrato from './pages/Extrato/Extrato';
import Cabecalho from './components/cabecalho/Cabecalho';
import Pagina404 from './pages/Pagina404/Pagina404';



function App() {
  return (
    <Router>
      <Cabecalho/>
      <Routes>
        <Route path='/' element={<Transferencias />} />
        <Route path = '*' element={<Pagina404 />} />
        <Route path = '/extrato' element={<Extrato />} />
      </Routes>
    </Router>
    
    

  );
}

export default App;
