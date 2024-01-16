
import './App.css';
import {BrowserRouter, Routes , Route}  from 'react-router-dom'
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import CartPage from './Components/cartPage';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Product/>} /> 
        <Route path="/cart" element={<CartPage />} />


      </Routes>
    </BrowserRouter>
    </div>
);
}

export default App;
