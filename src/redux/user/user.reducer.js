import { TODO_ACTION_TYPES } from "./user.type"

const INITIAL_STATE = {
    todo_list: [],
}

const toDoReaducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_ACTION_TYPES.ADD_TODO:
            return{
                ...state,
                users: action.payload
            }
        case TODO_ACTION_TYPES.DELETE_DOTO:
            return{
                ...state,
                searchValue: action.payload
            }
        default:
            return state //return to store
    }
}

export default toDoReaducer
