import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './sections/Home/Home'
import Alumni from './sections/Alumni/Alumni'
import Tutor from './sections/Tutor/Tutor'
import Horizonti from './sections/Horizonti/Horizonti'
import Gastudio from './sections/Gastudio/Gastudio'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/alumni' element={<Alumni/>}/>
        <Route path='/tutor' element={<Tutor/>}/>
        <Route path='/horizonti' element={<Horizonti/>}/>
        <Route path='/gastudio' element={<Gastudio/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
