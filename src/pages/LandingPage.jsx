import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import AppHero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles/main.css';

const LandingPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar />
        </div>  
      </header>
      <main>
        <div>
          <AppHero />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
