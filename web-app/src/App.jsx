import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import hero_bg from './assets/hero_bg.png';
import './App.css';
import Education from './components/Education.jsx';

function App() {
  return (
    <div
      className="app bg-cover bg-center min-h-screen img-fluid"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <Navbar />
      <Home />
  
      <Education />
      
    </div>
  );
}

export default App;