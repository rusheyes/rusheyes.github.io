import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import BlogComponent from '../components/Blog';
import '../styles/main.css';

const BlogPage = () => {
  return (
    <div className="App">
      <header>
        <div className='Top'>
          <NavigationBar2 />
        </div>  
      </header>
      <main className='main-content'>
        <div className='blogdes'>
          <BlogComponent />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BlogPage;