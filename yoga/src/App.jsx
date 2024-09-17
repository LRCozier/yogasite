import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Pages/Hero/hero'
import './App.css'
import AboutMe from './Pages/About/about'
import Classes from './Pages/Classes/classes'

function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/classes' element={<Classes/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
