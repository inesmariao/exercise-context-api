import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {
  return (
    <div className="App">
        <Context.Provider value='Inés María O.'>
          <AppRouter />
        </Context.Provider>
    </div>
  );
}

export default App;
