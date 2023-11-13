
import './App.css'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

//components
import Header from './components/header/Header'
import Footer from './components/footer/Footer';

//pages
import Homepages from './components/pages/home/Homepages';
import Project from './components/pages/project/Project';
import Board from './components/pages/board/Board';
import About from './components/pages/about/About';


function App() {

  return (
    <Router>
       <Header />
         <Routes>
           <Route path="/" element={<Homepages />} />
           <Route path="/project" element={<Project />} /> 
           <Route path="/about"  element={<About />} />
           <Route path='/board' element ={<Board />} />
           {/*<Route path='/direct' element={<Direct />} />*/}
         </Routes>
       <Footer />
    </Router>
  )
 
}

export default App
