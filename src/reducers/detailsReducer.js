const initState = {
    game:{},
    screen:{},
}

const detailsReducer = (state=initState, action) => {
    switch(action.type) {
        case "GET_DETAIL":
            return {...state,
                game: action.payload.game,
                screen: action.payload.screen}
        default:
            return {...state}
            
    }
}

export default detailsReducer;