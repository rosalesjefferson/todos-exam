import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updateTodos } from '../../redux/todos/todos.actions'
import { selectSingleTodo } from '../../redux/todos/todos.selectors'

import ReusableInput from '../../components/reusable-input/reusable-input.component'

import './update-todos.style.scss'

const UpdateTodos = ({ todo, updateTodos, history }) =>{
	const [todos, setTodo] = useState(todo.todo)
	const handleChange = e =>{
		const value = e.target.value
		setTodo(value)
	}

	const handleSubmit = e =>{
		e.preventDefault()
		updateTodos({ id: todo.id, todos })
		history.push('/')
	}
	return(
		<form onSubmit={ handleSubmit } className='form__update'>
			<h1>Update Todo</h1>
			<ReusableInput 
				handleChange={ handleChange }
				value={ todos } 
			/>
			<button className='form__button'>Save</button>
		</form>
	)
}

const mapStateToProps = (state, ownProps) =>{
	const id = ownProps.match.params.id
	return({
		todo: selectSingleTodo(id)(state)
	})
}
const mapDispatchToProps = (dispatch, ownProps) =>{
	return({
		updateTodos: todo => dispatch(updateTodos(todo))
	})
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodos) 
