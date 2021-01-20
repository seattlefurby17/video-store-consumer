import React from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to your wonderland</h1>
    </header>
    <Navigation />
    <Main />  
  </div>
);
  

export default App;
