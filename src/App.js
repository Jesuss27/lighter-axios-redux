import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadGames} from "./actions/gamesAction"

function App() {
  const dispatch = useDispatch();
  //On component mount, dispatch action "loadGames"
  useEffect(() =>{
    dispatch(loadGames());
  });
  return (
    <div className="App">
     <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
