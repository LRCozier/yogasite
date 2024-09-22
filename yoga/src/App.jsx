import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Pages/Hero/hero';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/navbar';
import './App.css';
import AboutMe from './Pages/About/about';
import Classes from './Pages/Classes/classes';
import YogaInEducation from './Pages/Yoga In Education/yogaeducation';
import Contact from './Pages/Contact/Contact';
import Header from './Components/Header/header';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header/>
        <Navbar/>
        {/*<Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/classes' element={<Classes/>} />
          <Route path='/yogaeducation' element={<YogaInEducation/>} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>*/}
      </div>
    </Router>
  )
}

export default App
