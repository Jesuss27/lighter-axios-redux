import axios from "axios";
import { popularGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
    //Fetch AXIOS
    //fetch data asynchronously
    const popularData = await axios.get(popularGamesURL());
    //dispatch an "action" object to reducer, stored in redux state
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular: popularData.data.results
        }
    })
}