import React, { useEffect} from "react"; 
import moduleStyle from './../../App.module.css';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Header from "../../components/Header/Header"
import CenterBlock from "../../components/CenterBlock/CenterBlock";
import styles from "../Top100/Top100.module.css"
import Skeleton from "../../components/Skeletons/SkeletonCenterBlock";
import { useTheme } from "../../Providers/ThemeProvider";
import { Title } from "../../components/Themes/Title";
import { useParams } from "react-router-dom";
import { get } from "../../Utils/Fetch";
import { setTracks } from "../../Redux/Track/TracksActions";
import { connect } from "react-redux";


// eslint-disable-next-line react/prop-types
function Top100({setTracks}) { 
    const {theme} = useTheme();
    const {selectionId} = useParams();

    const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);

    useEffect(() => {
        setTimeout (() => setIsLoadingSkeleton(false), 1000);
        getSelection()
    }, [])

    const getSelection = async () => {
        const {json} = await get(`/catalog/selection/${selectionId}/`)
        setTracks(json.items)

    }

    return ( 
        isLoadingSkeleton ? <Skeleton /> :
        <div style={{backgroundColor:theme.background}} className={moduleStyle["App"]}>  
            <Header/>
            <section className={styles["main"]}>          
                <BurgerMenu/>
                <section className={styles["main_flex"]}>
                    <Title theme={theme} >Топ 100</Title>
                    <CenterBlock/>
                </section>
            </section>
        </div>
    )
} 
  
export default connect(null, {setTracks})(Top100)