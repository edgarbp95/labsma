import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import NavbarMobile from './Components/NavbarMobile'
import ContactRoute from './Routes/Contact'
import Home from './Routes/Home'
import Perfiles from './Routes/Perfiles'
import Planes from './Routes/Planes'
import PruebasLaboratorio from './Routes/PruebasLaboratorio'
import SobreNosotros from './Routes/SobreNosotros'

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile/>
    <Routes>
      <Route path="/" element={<Home />}/>  
      <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>  
      <Route path="/pruebas-laboratorio" element={<PruebasLaboratorio/>}/>
      <Route path="/perfiles" element={<Perfiles/>}/> 
      <Route path="/planes-corporativos" element={<Planes/>}/>   
      <Route path="/contacto" element={<ContactRoute/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
