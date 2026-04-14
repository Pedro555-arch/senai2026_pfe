import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import Highlights from './components/Highlights';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Sidebar from './components/Sidebar';
import Suggestions from './components/Suggestions'; // <-- Importe aqui
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        
        <div className="left-column">
          <ProfileHeader />
          <Highlights />
          <About />
          <Experience />
          <Education />
          <Skills />
        </div>

        <div className="right-column">
          <Sidebar />
          <Suggestions /> {/* <-- Adicione logo abaixo da Sidebar! */}
        </div>

      </main>
    </div>
  );
}

export default App;