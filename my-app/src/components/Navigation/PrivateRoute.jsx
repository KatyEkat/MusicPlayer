import React, { Fragment } from "react";
import {Route, Redirect} from "react-router-dom";
import { REFRESH_TOKEN } from "../../Consts/Backups";


// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, ...props}) => {
    const token = localStorage.getItem(REFRESH_TOKEN)

    return (
        <Fragment>
        <Route render={ () => 
             token
             ? <Component {...props}/> 
             : <Redirect to={{pathname: "/login"}} /> 
        } />
        </Fragment>

    )
} 