import logo from "../Static/img/logo.svg";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Basic Example</h1>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
