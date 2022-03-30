import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Project from './components/pages/Project';
import PageNotFound from './components/pages/PageNotFound';

import { AuthProvider, AuthContext } from './contexts/auth'
import { useContext } from 'react';

function App() {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      return <div className="loading">Loading...</div>
    }

    if (!authenticated) {
      return <Navigate to="/Login/" />
    }

    return children
  }

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path='/remember' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/project' element={<Private><Project /></Private>} />
          <Route path='/project/:id' element={<Private><Project /></Private>} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
