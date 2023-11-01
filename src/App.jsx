import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Villas from './pages/villas/Villas';
import Experinces from './pages/experinces/Experinces';
import Dining from './pages/dining/Dining';


function App() {

  return (
<BrowserRouter >
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/stay' element={<Villas />} />
    <Route path='/experiences' element ={<Experinces />} />
    <Route path='/dining' element ={<Dining />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
