import * as counter from "../actions/constanta/constanta"

const initalState = {
    users: 0
}
const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case counter.userPlus:
            return {
                ...state,
                users: state.users + action.value
            }
        case counter.userMinus:
            return {
                users: state.users - action.value
            }
        default:
            return state
    }

}
export { initalState }
export default userReducer;