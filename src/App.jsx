import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Edit from './Pages/Edit';
import Create from './Pages/Create';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path={"/edit/:id"} element={<Edit/>}/>
        <Route path={"/create"} element={<Create/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;