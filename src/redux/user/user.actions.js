import { TODO_ACTION_TYPES } from "./user.type"

// GET USERS/MONSTERS
export const addToDo = () => {
    return(
        {   // Object
            // Action 1 -> Add ToDo
            type:TODO_ACTION_TYPES.ADD_TODO,
            payload: ''
        }
    )
}

// Action 2 -> Delete ToDo
export const deleteToDo = (username) => (
    {
        type: TODO_ACTION_TYPES.DELETE_DOTO,
        payload: ''
    }
)
