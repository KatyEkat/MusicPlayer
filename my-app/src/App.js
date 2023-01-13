import React from "react";
// import styles from "./App.module.css";
import Login from "./pages/LogIn/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main"
import NotFound from "./pages/NotFound/NotFound";
import Registration from "./pages/Registration/Registration";
import PlayListOfTheDay from "./pages/PlaylistOfTheDay/PlaylistOfTheDay";
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
          <PrivateRoute exact path={"/selection/:selectionId"} component={PlayListOfTheDay}/>
          <PrivateRoute exact path={"/favorite"} component={FavoriteTracks}/>
          <Route exact path={"*"} component={NotFound}/>
          

        </Switch>
      </BrowserRouter>

    </div>

  )
}

export default App;