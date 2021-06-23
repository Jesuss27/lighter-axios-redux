import {useDispatch} from "react-redux";
import {loadGames} from "../actions/gamesAction"
import React, { useEffect } from "react"

const Home = () => {
    // FETCH Games
    const dispatch = useDispatch();
     //On component mount, dispatch function "loadGames"
  useEffect(() =>{
    dispatch(loadGames());
  });
  return(
      <div>
          HOME
      </div>
  )

}

export default Home 