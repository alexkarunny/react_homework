export type ThemeInitStateType = {
    themeId: number
}

type actionType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState: ThemeInitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: actionType): ThemeInitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }// дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): actionType => ({type: 'SET_THEME_ID', id}) // fix any
