import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Description } from './Description';

const initData = {
  id: '1234',
  link: 'https://reactjs.org',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Description initData={initData} name="Egor" />
      </header>
    </div>
  );
}

export default App;
