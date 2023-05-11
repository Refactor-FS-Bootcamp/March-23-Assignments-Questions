import './App.css';
import Greet from './components/Greet';
// import { Greeting, ReactGreeting } from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greeting />
      <ReactGreeting /> */}
      <Greet lang="JavaScript" />
      <Greet lang="Golang" />
      <Greet lang="Swift">Language for iOS apps</Greet>
      <hr />
      <Welcome name="React" />
      <Welcome name="Flutter">Language for cross mobile development</Welcome>
      <Welcome name="React Native" />
    </div>
  );
}

export default App;
