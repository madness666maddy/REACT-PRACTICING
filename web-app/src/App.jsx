import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import hero_bg from './assets/hero_bg.png';
import './App.css';

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;