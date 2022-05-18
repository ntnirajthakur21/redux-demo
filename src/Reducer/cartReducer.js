const initialData = {
    cartCount:2
}

function cartReducer(state = initialData, action)
{
    // Here state store the initial value

    // Action is a function which controls the state

    switch(action.type)
    {
        case 'ADD_ITEM':
            return{
                cartCount: ++state.cartCount
            } 

        case 'REMOVE_ITEM':
            if(state.cartCount === 0)
            return state
            return{
                cartCount: --state.cartCount
            }
        
        default:
            return state
    }
}

export default cartReducer