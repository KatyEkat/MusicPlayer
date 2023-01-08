import React from "react";
// import styles from "./App.module.css";
import Login from "./pages/LogIn/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main"
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import PlayListOfTheDay from "./pages/PlaylistOfTheDay/PlaylistOfTheDay";
import Top100 from "./pages/Top100/Top100";
import IndyPlaylist from "./pages/IndyPlaylist/IndyPlaylist"
import { PrivateRoute } from "./components/Navigation/PrivateRoute";
import { PublicRoute } from "./components/Navigation/PublicRoute";
import FavoriteTracks from "./pages/FavoriteTracks/FavoriteTracks";



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* component={()=><HomeContainer/>} */}
          <PublicRoute  exact path={"/login"} component={Login}/>
          <PublicRoute exact path={"/registration"} component={Registration}/>
          <PrivateRoute exact path={"/music"} component={Main}/>
          <PrivateRoute exact path={"/playlist_of_the_day"} component={PlayListOfTheDay}/>
          <PrivateRoute exact path={"/top_100"} component={Top100}/>
          <PrivateRoute exact path={"/indy_playlist"} component={IndyPlaylist}/>
          <PrivateRoute exact path={"/favorite"} component={FavoriteTracks}/>
          <Route exact path={"*"} component={NotFound}/>
          

        </Switch>
      </BrowserRouter>

    </div>

  )
}

export default App;