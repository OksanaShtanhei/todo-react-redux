import React, {useState} from 'react';

const TodoInput = () => {
	
	const [newTodo, setNewTodo] = useState('')
	const handleChange = event => setNewTodo(event.target.value)

	return (
		<>
			<input type="text" defaultValue={newTodo} onChange={handleChange} />
			<button >ADD TODO</button>
			
		</>
	)
}
export default TodoInput
// onClick={(text) => dispatch(addItem(text))