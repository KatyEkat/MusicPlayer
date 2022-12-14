import React, { useEffect } from "react"; 
import moduleStyle from './../../App.module.css';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Header from "../../components/Header/Header"
import CenterBlock from "../../components/CenterBlock/CenterBlock";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import styles from "../Main/Main.module.css";
import Skeleton from "../../components/Skeletons/SkeletonCenterBlock";


function Main() { 
          // Инициализация скелетона
    const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);

    useEffect(() => {
        setTimeout (() => setIsLoadingSkeleton(false), 1000);
    }, [])

    return ( 
        isLoadingSkeleton ? <Skeleton /> :
        <div className={moduleStyle["App"]}>  
        <Header/>
        <section className={styles["main"]}>          
            <BurgerMenu/>
            <CenterBlock/>
            <NavigationMenu/>
        </section>
        </div>
    )
} 
 
export default Main; 