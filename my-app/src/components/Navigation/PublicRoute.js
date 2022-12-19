import React from "react";
import {Route, Redirect} from "react-router-dom";


// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ component: Component, ...props}) => {
    const token = localStorage.getItem("token")

    return (
        
        <Route render={ () => 
             token
             ? <Redirect to={{pathname: "/music"}} />
             : <Component {...props}/> 
        } />
        

    )
} 
