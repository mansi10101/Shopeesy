import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Blog from './Blog';
import About  from './About';
import Contact from './Contact';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <NewsLetter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
