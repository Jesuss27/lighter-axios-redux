import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
    //Fetch AXIOS
    //fetch data asynchronously
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    //dispatch an "action" object to reducer, stored in redux state
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}