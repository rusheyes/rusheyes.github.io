import React from 'react';
import NavigationBar2 from '../components/Navbar2';
import Login from '../components/Login';
import Footer from '../components/Footer';
import '../styles/main.css';

const LoginPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar2 />
        </div>  
      </header>
      <main>
        <div>
          <Login />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;

