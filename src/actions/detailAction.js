import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type:"LOADING_DETAIL",
    })
    
    const details = await axios.get(gameDetailsURL(id));
    const screenshotData = await axios.get(gameScreenshotsURL(id));
    

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: details.data,
            screen: screenshotData.data,
        }      
    })
};

export default loadDetail;