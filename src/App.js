import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {

  const clients = {
    id: 100,
    name: 'Catalina',
    last_name: 'Oliveros',
    phone: '300000000',
    city: 'Duitama'
  }

  return (
    <div className="App">
        <Context.Provider value={clients}>
          <AppRouter />
        </Context.Provider>
    </div>
  );
}

export default App;
