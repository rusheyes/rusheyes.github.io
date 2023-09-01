import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactUs'
import '../styles/main.css';

const ContactUsPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar2 />
        </div>  
      </header>    
      <main>
        <div>
          <ContactForm />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactUsPage;
