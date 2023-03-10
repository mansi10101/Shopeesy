import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Product from './Shop/Product';
import Cart from './Cart';
import Orders from './Orders';
import { AnimatePresence } from 'framer-motion';
import Loading from './Loading';


const Layout = () => {

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() =>{
      setLoading(false);
    },1400)
  })

  return (
    <AnimatePresence>
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: 'grid',
            gap: '20',
          }}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/myorders' element={<Orders />} />
            </Routes>
            <NewsLetter />
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
