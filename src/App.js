import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

import Home from "./Home";
import Team from "./Team";
import Contact from './Contact';
import ProductsBtn from './ProductsBtn';

function App() {
  return <Router>
  <nav>
    <div className="nav-brand">
        <h2>TechStore</h2>
    </div>
    <Link to="/" className="link">Home</Link>  
    <Link to="/productsbtn" className="link">Shop</Link>
    <Link to="/team" className="link">About Us</Link>
    <Link to="/contact" className="link">Contacts</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/productsbtn" element={<ProductsBtn />}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/contact" element={<Contact/>}/>

  </Routes>

  </Router>  
}

export default App;