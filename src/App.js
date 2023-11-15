import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import SuggestionBox from './components/SuggestionBox';

const App = () => {
  return (
    <div>
      <h1>For the Care of Animals</h1>
      <NavBar>
        <SuggestionBox />
      </NavBar>
    </div>
  );
};

export default App;
