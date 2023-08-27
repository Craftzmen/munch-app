import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import ProductCheckout from './pages/ProductCheckout'

import './output/output.css'
import Navbar from './shared/Navbar';
import Home from './Home/Home';

const App = () => {
 return (
    <React.Fragment>
        <div className='w-full h-screen p-0 m-0' >
            <div>
                <Navbar/>
            </div>
            <Routes>
                <Route path='' element={<Home/>} />
                <Route replace path='*' element={<h1>Page not found</h1>} />
                <Route path="/restaurants/:id" element={<ProductDetails/>} />
                <Route path="/restaurants/:id/checkout" element={<ProductCheckout/>} />
            </Routes>
        </div>
    </React.Fragment>
 );
}

export default App;
