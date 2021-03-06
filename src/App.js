import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import MyServices from './Components/MyServices/MyServices';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header />
        <main className="main-content">
          <AboutMe />
          <MyServices />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
