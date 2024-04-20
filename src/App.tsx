import React, { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from "./router";
import PlayerBar from "@/views/player/playbar";
import { useAppDispatch } from "@/store";
import { fetchCurrentSongData } from "./store/modules/playbar/index";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongData(2129666437));
  }, []);
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <PlayerBar />
    </div>
  );
}

export default App;
