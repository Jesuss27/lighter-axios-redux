const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched:[],
}


export const gamesReducer = (state=initState, action) =>{
    switch(action.type){
        case "FETCH_GAMES":
            //return updated state 
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames}
        default:
            return {...state}
    }


}