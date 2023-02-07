import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import NavbarMobile from './Components/NavbarMobile'
import Home from './Routes/Home'
import PruebasLaboratorio from './Routes/PruebasLaboratorio'

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile/>
    <Routes>
      <Route path="/" element={<Home />}/>  
      <Route path="/pruebas-laboratorio" element={<PruebasLaboratorio/>}/>  
    </Routes>
    <Footer/>
    </>
  )
}

export default App
