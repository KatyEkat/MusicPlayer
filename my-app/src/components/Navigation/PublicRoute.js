import React from "react";
import {Route, Redirect} from "react-router-dom";
import { REFRESH_TOKEN } from "../../Consts/Backups";


// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ component: Component, ...props}) => {
    const token = localStorage.getItem(REFRESH_TOKEN)

    return (
        
        <Route render={ () => 
             token
             ? <Redirect to={{pathname: "/music"}} />
             : <Component {...props}/> 
        } />
        

    )
} 
