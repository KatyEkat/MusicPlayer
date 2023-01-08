import React, { useEffect } from "react"; 
import moduleStyle from './../../App.module.css';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Header from "../../components/Header/Header"
import CenterBlock from "../../components/CenterBlock/CenterBlock";
import styles from "../FavoriteTracks/FavoriteTracks.module.css";
import Skeleton from "../../components/Skeletons/SkeletonCenterBlock";
import { useTheme } from "../../Providers/ThemeProvider";
import { Title } from "../../components/Themes/Title";


function FavoriteTracks() { 
    const {theme} = useTheme();


    // Инициализация скелетона
    const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);

    useEffect(() => {
        setTimeout (() => setIsLoadingSkeleton(false), 1000);
    }, [])
    console.log(theme);
    
    return ( 
        isLoadingSkeleton ? <Skeleton /> :
        <div style={{backgroundColor:theme.background}} className={moduleStyle["App"]}>  
            <Header/>
            <section className={styles["main"]}>          
                <BurgerMenu/>
                <section className={styles["main_flex"]}>
                    <Title theme={theme}>Мой плейлист</Title>
                    <CenterBlock/>
                </section>
            </section>
        </div>
    )
} 
 
export default FavoriteTracks; 