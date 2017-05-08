const initialState = {

}

export function app(state = initialState, action) {

    switch (action.type) {
        case "DUMMIE_ACTION":
            return state
            break

        default:
            return state
    }
}
