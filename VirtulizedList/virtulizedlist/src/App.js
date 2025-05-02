// import logo from './logo.svg';
import './App.css';
import VirtualizedList from "./VirtualizedList.js"

function App() {

const list = Array.from( {length:100000} , ( _ , index) => index + 1 )


  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <VirtualizedList list={list} height={500} width={300} itemHeight={40}  />
    </div>
  );
}

export default App;
