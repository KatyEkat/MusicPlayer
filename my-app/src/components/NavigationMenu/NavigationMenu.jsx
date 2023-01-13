import React, {useEffect} from "react";
import styles from "./NavigationMenu.module.css";
import { Link } from "react-router-dom";
import { get } from "../../Utils/Fetch";
import { connect } from "react-redux";
import { setSelections } from "../../Redux/Track/TracksActions";
import { array, func } from "prop-types";


function NavigationMenu({selections, setSelections}) {

    NavigationMenu.propTypes = {
        selections: array,
        setSelections: func
    }

    useEffect(() => {
        getSelections()
    },[])

    const getSelections = async () => {
        const {json} = await get("/catalog/selection/")
        setSelections(json)
    }

    return (
        <div className={styles["navigationMenu"]}>
            {selections.map(selection => 
                <Link 
                    key={selection.id}
                    className={styles.navigationMenu__link} 
                    to={`/selection/${selection.id}`}>
                    {selection.name}
                </Link>
            )}
        </div>
    );
}

const getState = (state) => ({
    selections:state.tracks.selections
})
export default connect(getState, {setSelections})(NavigationMenu)
