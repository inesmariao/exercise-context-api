import { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Context } from '../context/Context';

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(Context);

  const handleClick = () => {
    toggleDarkMode();
    localStorage.setItem('dark-mode', !isDarkMode); // Guardar el estado en localStorage
  };

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {isDarkMode ? <FaSun size={24} color="#FFD700" /> : <FaMoon size={24} color="#FFF" />}
    </button>
  );
};
