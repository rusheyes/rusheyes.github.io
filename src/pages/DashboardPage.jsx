import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar3 from '../components/Navbar3';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

const DashboardPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar3 />
        </div>  
      </header>    
      <main className="container-fluid">
        <div className="row">
          <div className='col-md-3'>
            <Sidebar />
          </div>
          <div className='col-md-9'>
            <Dashboard />
          </div>       
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardPage;
