import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Supervision from './components/Supervision';
import Professional from './components/Professional';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Education />
                <Research />
                <Publications />
                <Teaching />
                <Supervision />
                <Professional />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;