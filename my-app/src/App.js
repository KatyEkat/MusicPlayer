import React, { useEffect } from "react";
// import styles from "./App.module.css";
import Login from "./pages/LogIn/Login";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Main from "./pages/Main/Main"
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import PlayListOfTheDay from "./pages/PlaylistOfTheDay/PlaylistOfTheDay";
import Top100 from "./pages/Top100/Top100";
import IndyPlaylist from "./pages/IndyPlaylist/IndyPlaylist";
import { PrivateRoute } from "./components/Navigation/PrivateRoute";
import { PublicRoute } from "./components/Navigation/PublicRoute";
import FavoriteTracks from "./pages/FavoriteTracks/FavoriteTracks";
import { isAuthTokenExists } from "./Utils/Fetch";



function App() {
  const history = useHistory()

  useEffect (() => {
    window.addEventListener("storage", onLogout)
    
    return() => {
      window.removeEventListener("storage", onLogout)
    }
  },[]) 

  const onLogout = () => {
    if (!isAuthTokenExists()) {
      history.push("/login")
    }
  }
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* component={()=><HomeContainer/>} */}
          <PublicRoute  exact path={"/login"} component={Login}/>
          <PublicRoute exact path={"/registration"} component={Registration}/>
          <PrivateRoute exact path={"/music"} component={Main}/>
          <PrivateRoute exact path={"/playListOfTheDay"} component={PlayListOfTheDay}/>
          <PrivateRoute exact path={"/top100"} component={Top100}/> 
          <PrivateRoute exact path={"/indyPlaylist"} component={IndyPlaylist}/> 
          <PrivateRoute exact path={"/favorite"} component={FavoriteTracks}/>
          <Route exact path={"*"} component={NotFound}/>
          

        </Switch>
      </BrowserRouter>

    </div>

  )
}

export default App;