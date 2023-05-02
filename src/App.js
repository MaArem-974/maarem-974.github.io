import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { VeilleJ } from "./components/VeilleJ";
import { VeilleT } from "./components/VeilleT";
import { Contact } from "./components/Contact";
import { Profil } from "./components/Profil";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Profil />
      <Projects />
      <VeilleT />
      <VeilleJ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;