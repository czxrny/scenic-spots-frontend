import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Spots from './pages/Spots';
import SpotDetails from './pages/SpotDetails.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { StrictMode, useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <StrictMode>
      <AuthProvider>
        <div className="flex flex-col min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-text)]">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spots" element={<Spots />} />
              <Route path="/spot/:id" element={<SpotDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </StrictMode>
  );
}

export default App;
