import './App.css';
import { Banner, Contact, Navbar, Projects, About, Footer, Socials } from './components'
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Socials />
        <Banner />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
