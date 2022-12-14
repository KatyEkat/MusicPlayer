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



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* component={()=><HomeContainer/>} */}
          <Route exact path={"/login"} component={() => <Login/>}/>
          <Route exact path={"/registration"} component={()=> <Registration/>}/>
          <Route exact path={"/music"} component={Main}/>
          <Route exact path={"/playlist_of_the_day"} component={PlayListOfTheDay}/>
          <Route exact path={"/top_100"} component={Top100}/>
          <Route exact path={"/indy_playlist"} component={IndyPlaylist}/>
          <Route exact path={"*"} component={NotFound}/>
          

        </Switch>
      </BrowserRouter>

    </div>

  )
}

export default App;