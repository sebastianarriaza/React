import logo from './logo.svg';
import './App.css';
import Suma from './Operaciones.js'

const Title = () => <h1>Hello World</h1>

function App() {
  return (
    <div className="App">
      <Title />
      <Suma />
    </div>
  );
}

export default App;
