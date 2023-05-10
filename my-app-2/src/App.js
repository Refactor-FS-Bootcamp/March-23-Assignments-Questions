import './App.css';
import Greet from './components/Greet';
import { Greeting, ReactGreeting } from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greeting />
      <ReactGreeting />
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
