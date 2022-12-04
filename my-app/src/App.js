import React, { useEffect } from "react";
import './App.css';
import './components/Main/Main.css';
import Header from './components/Header/Header';
import CenterBlock from "./components/CenterBlock/CenterBlock";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import ContentLoader from "react-content-loader";
import Skeleton from "../src/Skeletons/SkeletonCenterBlock";


function App() {

      // Инициализация скелетона
    const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);

    useEffect(() => {
        setTimeout (() => setIsLoadingSkeleton(false), 1000);
    }, [])

  return (
    isLoadingSkeleton ? <Skeleton /> :
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