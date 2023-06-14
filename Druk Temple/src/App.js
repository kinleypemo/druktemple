// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroBanner from './Components/HeroBanner';

import Index from './Pages/Index';

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useNavigate
} from "react-router-dom";

import About from './Pages/About';
import Donate from './Pages/Donate';
import Event from './Pages/Event';
import Home from './Pages/Home';
import Lhakhang, { PostContext } from './Pages/Lhakhang';
import NavigationLink from './Components/NavigationLink';


import { useContext } from 'react';

function App() {
  return (
    <Router>
    <div>
    <Routes>
        <Route path={"/"} element={<Home/>} />
        {/* <Route path={"/"} element={<Lhakhang/>} /> */}
        {/* <Route path={"/About"} element={<About />} />      Use element prop with About component */}
        <Route path={"/Lhakhang"} element={<Lhakhang />} />
        <Route path={"/Event"} element={<Event />} />
        {/* <Route path={"/Contact"} element={<Contact />} /> */}
        <Route path={"/Donate"} element={<Donate />} />
        {/* <Route path={"/detailpage"} element={<DetailPage lhakhang={lhakhang}/> } /> */}
                </Routes>
    </div>
    </Router> 
    
  );
}

export default App;
