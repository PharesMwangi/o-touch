import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Accommodation from './pages/Accomodation'
import Restruant from './pages/Restruant'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/accomodation' element={<Accommodation />} />
        <Route path='/restruant' element={<Restruant />} />
      </Routes>
    </BrowserRouter>
  )
}
