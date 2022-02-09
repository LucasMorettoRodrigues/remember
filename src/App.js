import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
