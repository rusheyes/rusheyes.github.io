import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import RegistrationComponent from '../components/Registration';
import '../styles/main.css';

const RegistrationPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar2 />
        </div>  
      </header>    
      <main>
        <div className='regdes'>
          <RegistrationComponent />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RegistrationPage;