import { NavBar } from './component/NavBar'
import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { Details } from './pages/Details';
import { Footer } from './component/Footer';

function App() {
  
  return (
    <>
    <Router>
      <div id='image'>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
