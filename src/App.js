import Navbar from './components/Navbar';
import Landing from './components/Landing'
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import User from './components/User';
import Prescription from './components/Prescription';


function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
        <Route path="user" element={<User />} />
        <Route path="prescription" element={<Prescription />} />
        
      </Routes>
    </>
  );
}

export default App;
