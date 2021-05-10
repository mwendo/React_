import './App.css';
import React from 'react';
import Tabs from './components/Tabs';
import './components/Tabs.css';

function App() {
  return (
    <div className="App">
      <Tabs number="1"/>
      <Tabs number="2"/>
      <Tabs number="3"/>
    </div>
  );
}

export default App;