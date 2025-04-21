import logo from './logo.svg';
import './App.css';
import JO from './JO.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={JO} className="App-JO" alt="JO" />
        <p>
          Feliz Aniversário <code>Parabéns</code> meu AMOR!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clica AQUI AMOR
        </a>
      </header>
    </div>
  );
}

export default App;
