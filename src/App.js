import { useState } from 'react';
import './App.css';
import AppContext from './AppContext';
import Content from './Content';
import Header from './Header';

function App() {
  const [userName, setUserName] = useState("Ayça_22");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;
