import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Agency from './components/Agency';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Shop from './components/Shop';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home /> }></Route>
        <Route path='/agency' element={<Agency /> }></Route>
        <Route path='/services' element={<Services /> }></Route>
        <Route path='/ourshop' element={<Shop />}></Route>
        <Route path='/team' element={<Team /> }></Route>
        <Route path='/contactus' element={<Contact /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
