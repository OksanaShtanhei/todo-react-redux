const initialState = {
    todoList: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':{
            const { id, task } = action.payload
            return {
                ...state,
                todoList: [...state.todoList, {id,task}]
            }
        }
        case 'DELETE':{
            const { id } = action.payload
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== id)
            }
        }
        default:
            return state
    }
}
export default reducer