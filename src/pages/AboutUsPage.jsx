import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import '../styles/main.css';

const AboutUsPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar2 />
        </div>  
      </header>
      <main className='main-content'>
        <div className='blogdes'>
          <AboutUs />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;