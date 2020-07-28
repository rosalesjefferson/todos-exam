import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodos } from '../../redux/todos/todos.actions'

import ReusableFormInput from '../reusable-input/reusable-input.component'

import './add-todos.style.scss'

const AddTodos = ({ addTodos }) =>{
	const [todos, setTodos] = useState({ id: '', todo: ''})

	const handleChange = e =>{
		const value = e.target.value
		setTodos({ ...todos, todo: value })
	}

	const handleSubmit = e =>{
		e.preventDefault()
		const newId = Math.floor(Math.random() * 100000000000000000000)
		console.log(newId, 'asdasd')
		addTodos({ id: String(newId), todo: todos.todo })
		setTodos({ id: '', todo: ''})
	}

	return(
		<form onSubmit={ handleSubmit } className='form'>
			<ReusableFormInput 
				handleChange={ handleChange }
				placeholder='Add todos'
				value={ todos.todo }
			/>
		</form>
	)
}

const mapDispatchToProps = dispatch =>({
	addTodos: todo => dispatch(addTodos(todo))
})

export default connect(null, mapDispatchToProps)(AddTodos)