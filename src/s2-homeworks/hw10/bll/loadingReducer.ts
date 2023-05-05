type stateType = {
    isLoading: boolean
}

type actionsType = LoadingActionType

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: stateType = initState, action: actionsType): stateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}


export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
