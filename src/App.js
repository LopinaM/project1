import logo from './logo.svg';
import './App.css';

function App() {
  return (<div>
    <Header />
    <Technologies />

  </div>
  );
}

function Technologies() {
  return (
    <div >
      HTML!
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div>
      <a href="">html</a>
      <a href="">css</a>
      <a href="" s>js</a>
    </div>
  );
}


export default App;
