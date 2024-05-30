import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NoPage from './pages/NoPage'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
