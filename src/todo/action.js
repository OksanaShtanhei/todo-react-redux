import { ADD, DELETE } from "./actionTypes";

let nextTodoId=0

export const addTodo = task => ({
    type: ADD,
    payload: {
        id: ++nextTodoId,
        task
    }
})

export const deleteTodo = id => ({
    type: DELETE,
    payload: {
        id
    }
})