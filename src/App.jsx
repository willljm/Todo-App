import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Register } from './pages/Register';
import { PaginaPrincipal } from './pages/PaginaPrincipal';
import { Inicio } from './pages/Inicio';
import { Settings } from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}