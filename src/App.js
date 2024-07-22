import { useEffect, useState } from 'react';
import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {
  const [user, setUser] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log("useEffect lanzado por primera vez");
    let user_local = JSON.parse(localStorage.getItem("user"));
    setUser(user_local);
    
    // Sincroniza el estado del modo oscuro
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    setIsDarkMode(darkMode || false);
    document.body.classList.toggle('dark-mode', darkMode);
  }, []);

  useEffect(() => {
    console.log("Este es un cambio de user");
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  return (

      <Context.Provider value={{ user, setUser, isDarkMode, toggleDarkMode }}>
          <div className="App">
        <AppRouter />
          </div>
      </Context.Provider>
  );
}

export default App;
