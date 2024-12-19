import { FaHome, FaCalendarAlt, FaCog, FaStar, FaCheck, FaClock } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">
              <FaHome className="icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="nav-link">
              <FaCalendarAlt className="icon" /> Calendario
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link">
              <FaCog className="icon" /> Configuración
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-link">
              <FaStar className="icon" /> Favoritos
            </Link>
          </li>
          // ... resto del código ...
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar; 