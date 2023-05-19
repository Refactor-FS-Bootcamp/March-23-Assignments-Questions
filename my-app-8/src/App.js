import './App.css';
import GrandParent from './components/GrandParent';
import { ChannelProvider } from './components/channelContext';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Nabendu">
        <ChannelProvider value="Refactor">
          <GrandParent />
        </ChannelProvider>
      </UserProvider>
    </div>
  );
}

export default App;
