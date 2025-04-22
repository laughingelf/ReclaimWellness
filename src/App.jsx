import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import Services from './pages/Services'
import './App.css'


function App() {

  return (
    <>
    <div className='App'>


      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
