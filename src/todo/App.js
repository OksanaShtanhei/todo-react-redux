import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Todos from './Todos'
import { addTodo } from './action'
import './App.css'

const App = () => {
	const [task, setTask] = useState('')
	const dispatch = useDispatch()

	const handleAdd = (task) => {
		dispatch(addTodo(task))
		setTask('')
	}
	return (
		<div >
			<h1>My Todo List</h1>
			<input onChange={event => setTask(event.target.value)} value={task}/>
			<button onClick={() => handleAdd(task)}>ADD</button>
			<Todos />		
		</div>
	)
}
export default App