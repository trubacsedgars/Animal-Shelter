import React from 'react';
import './App.scss';
import AddAnimal from './components/AddAnimal/AddAnimal';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <AddAnimal />
  </div>
);

export default App;
