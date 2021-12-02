import './Resets.css';
import './App.css';

// Components.
import Nav from "./PageComponents/Nav/Nav";
import Title from "./PageComponents/ProjectTitle/Title";
import Stats from './PageComponents/ProjectStats/Stats';
import About from './PageComponents/About/About';
import Pledge from './PageComponents/Pledge/Pledge';
import Slide from './PageComponents/Slide/Slide';



function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Title />
        <Stats />
        <About />
        <Pledge />
        <Slide />
      </main>
    </div>
  );
}

export default App;