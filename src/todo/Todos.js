import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteTodo} from './action'

const Todos = () =>{
	const todos = useSelector(state => state.todoList)
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
	}
		return (
			<ul>
				{todos.length > 0 
					? todos.map(el => <li key={el.id}>{el.task} 
						<span onClick={() => handleDelete(el.id)}>x</span></li>) 
					: <p>NO TODOS</p>}
			</ul>
		)
	}
export default Todos