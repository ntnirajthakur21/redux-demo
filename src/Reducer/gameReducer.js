const initialData = {
    gameName:'Football',
    playerName:'Hari'
}

function gameReducer(state = initialData, action)
{
    // Here state store the initial value

    // Action is a function which controls the state

    switch(action.type)
    {
        case 'CHANGE_GAME_NAME':
            return{
                ...state,
                gameName: action.payload
            } 

        case 'CHANGE_PLAYER_NAME':
            return{
                ...state,
                playerName: action.payload
            }
        
        default:
            return state
    }
}

export default gameReducer