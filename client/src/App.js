import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  const [allGoals, setAllGoals] = useState([]);

  return (
    <div>
      <AppContext.Provider value={{allGoals, setAllGoals}}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path='/goals' />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
