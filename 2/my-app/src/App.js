import logo from './logo.svg';
import './App.css';

function App() {
  // const message = 'Learn React';

  // const getGreetingMessage = (name) => {
  //   if (name === 'kimoon') return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // }

  const name = 'hwarari';
  return (
    <div className="App" tabIndex="0">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name === 'hwarari' ? `Hello, ${name} Learn React ` : `Welcome, ${name}! Learn React`}
        </a>
      </header>
      <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlfor="agreement-el">동의</label>
    </div>
  );
}

export default App;
