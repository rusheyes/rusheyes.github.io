import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar3 from '../components/Navbar3';
import Mailbox from '../components/Mailbox';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

const MailboxPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar3 />
        </div>  
      </header>    
      <main className="container-fluid">
        <div className="row justify-content-center align-items-center px-576">
          <div className='col-md-6'>
            <Mailbox />
          </div>       
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MailboxPage;
