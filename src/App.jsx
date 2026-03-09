import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Movies from './Component/Movies';
import Theatres from './Component/Theatres';
import Orders from './Component/Orders';
import Login from './Component/Login';
import Navbar from './navber/Navbar';
import Footer from './Component/Footer';

function App(){
  return (
    <div className="App">
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/Movies"element={<Movies/>}/>
            <Route path="/Theatres"element={<Theatres/>}/>
            <Route path="/Orders"element={<Orders/>}/>
            <Route path="/Login"element={<Login/>}/>
          </Routes>
          </BrowserRouter>
          <Footer/>
    </div>
  );
}
export default App;
