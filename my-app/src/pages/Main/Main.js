import React, { useEffect } from "react"; 
import moduleStyle from './../../App.module.css';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Header from "../../components/Header/Header"
import CenterBlock from "../../components/CenterBlock/CenterBlock";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import styles from "../Main/Main.module.css";
import Skeleton from "../../components/Skeletons/SkeletonCenterBlock";
import { useTheme } from "../../Providers/ThemeProvider";
import { Title } from "../../components/Themes/Title";
import { get } from "../../Utils/Fetch";
import { setTracks } from "../../Redux/Track/TracksActions";
import { connect } from "react-redux";


// eslint-disable-next-line react/prop-types
function Main({setTracks}) { 
    const {theme} = useTheme();


    // Инициализация скелетона
    const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);

    useEffect(() => {
        setTimeout (() => setIsLoadingSkeleton(false), 1000);
        onGetAllTrack()
    }, [])
    console.log(theme);

    const onGetAllTrack = async() => {
        const {json} = await get("/catalog/track/all/")
        setTracks(json);
    }

    
    return ( 
        isLoadingSkeleton ? <Skeleton /> :
        <div style={{backgroundColor:theme.background}} className={moduleStyle["App"]}>  
            <Header/>
            <section className={styles["main"]}>          
                <BurgerMenu/>
                <section className={styles["main_flex"]}>
                    <Title theme={theme}>Треки</Title>
                    <CenterBlock allowFilter={true}/>
                </section>
                <NavigationMenu/>
            </section>
        </div>
    )
} 
 
export default connect(null, {setTracks})(Main)