import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar3 from '../components/Navbar3';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import '../styles/main.css';

const ProfilePage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar3 />
        </div>  
      </header>    
      <main className='containerdes'>
        <div>
          <Profile />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilePage;