import logo from './logo.svg';
import './App.css';
import { Notes } from "./notes/pages"
import { NavBar } from './notes/navbar';

function App() {
  return (
    <div className="App-content-container">
      <header className="App-header">
      </header>
      <NavBar />
      <Notes />
    </div>
  );
}

export default App;
