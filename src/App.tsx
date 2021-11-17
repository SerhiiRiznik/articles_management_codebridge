import React, { useEffect } from "react";
import "./App.scss";
import Box from "@mui/material/Box";
import { getArticles } from "./components/state/appSlice";
import { useDispatch} from "react-redux";
import Homepage from "./components/Homepage";
import {
  Switch,
  Route,
} from "react-router-dom";
import Articlepage from "./components/Articlepage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Box className="app">
      <Switch>
        <Route path="/:topick_id">
          <Articlepage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Box>
  );
}


export default App;

export type articleType = {
   content: string
   description: string
   title: string
   url: string
}