import React from 'react';
import Navbar from './Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
  const path = process.env.REACT_APP_FOR_PATH;

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
          <HashRouter>
            <Navbar baseline ="/" />
            <Routes>
              <Route exact path={path + '/'} element={<Home />} />
              <Route path={path + '/shop'} element={<Shop />} />
              <Route path={path + '/about'} element={<About />} />
              <Route path={path + '/contact'} element={<Contact />} />
              <Route path={path + '/product/:id'} element={<Product />} />
              <Route path={path + '/cart'} element={<Cart />} />
              <Route path={path + '/myorders'} element={<Orders />} />
            </Routes>
            <NewsLetter />
            <Footer />
          </HashRouter>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Layout;
