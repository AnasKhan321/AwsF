import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import Services from './componenets/Services'
import Login from './componenets/Login'; 
import Signup from './componenets/Signup'; 
import Addservice from './componenets/Addservice'; 
import Cart from './componenets/Cart'; 
import Myservices from './componenets/Myservices'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delte from './componenets/Delete'; 
import Uservices from './componenets/Uservices'; 
import Footer from './componenets/Footer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/"  element={<Home key="home" />}></Route>
          <Route path="/services" element={<Services key="services" />}></Route>
          <Route path="/login" element={<Login key="login" />}></Route>
          <Route path="/signup" element={<Signup key="signup" />}></Route>
          <Route path="/adds"  element={<Addservice key="addservices" />} ></Route>
          <Route path="/mycart"  element={<Cart key="cart" />} ></Route>
          <Route path="/myservice"  element={<Myservices  key="myservices" />} ></Route>
          <Route path="/dc"  element={<Delte  key="delete" />} ></Route>
          <Route path="/update"  element={<Uservices  key="Uservices" />} ></Route>







        </Routes>

        <Footer/>



      </BrowserRouter>

    </>
  );
}

export default App;
