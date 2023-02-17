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
import Product from './Shop/Product';

const Layout = () => {
  return (
    <div style={{
      display: "grid",
      gap: '20',
    }} >
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:id' element={<Product />} />
        </Routes>
        <NewsLetter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
