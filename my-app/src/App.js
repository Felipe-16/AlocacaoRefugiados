import './App.css';
import Transferencias from './app/Transferencias/Transferencias';

function App() {
  return (
    <section>
      <header>
        <a routerLink='home'>Sobre nós</a>
        <div>
          <a routerLink='abrigo' >Abrigos</a>
          <a routerLink='transferencias-doacao'>Transferências</a>
          <a routerLink='extrato-doacao'>Doações</a>
        </div>

      </header>
      <main>
        <router-outlet></router-outlet>
      </main>

      <Transferencias/>


    </section>
  );
}

export default App;
