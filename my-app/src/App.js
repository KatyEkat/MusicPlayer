import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CenterBlock from "./components/CenterBlock/CenterBlock";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App() {
  return (
    <div className="App">  
      <Header/>
      <section className="main">          
        <BurgerMenu/>
        <CenterBlock/>
        <NavigationMenu/>
      </section>
    </div>
  );
}


export default App;