import './App.css';
import Bio from '../Bio/Bio';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
