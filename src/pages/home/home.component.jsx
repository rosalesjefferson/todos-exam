import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectTodos } from '../../redux/todos/todos.selectors'
import { deleteTodos } from '../../redux/todos/todos.actions'

import AddTodos from '../../components/add-todos/add-todos.component'
import './home.style.scss'

const Home = ({ todos, deleteTodos }) =>{

	const handleClickDelete = id =>{
		deleteTodos(id)
	}

	return(
		<div className='home'>
			<h1 className='title'>Todos</h1>
			<ul className='todos__lists'>
				{
					todos.map(todo =>(
						<li key={ todo.id } className='todo__item'> 
							<span>{ todo.todo }</span>
							<button onClick={ () => handleClickDelete(todo.id) }>delete</button>
							<Link to={ `/update/${todo.id}` }>Update</Link>
						</li>
					))
				}
			</ul>
			<AddTodos />
		</div>
	)
}

const mapStateToProps = state =>({
	todos: selectTodos(state)
})

const mapDispatchToProps = dispatch =>({
	deleteTodos: id => dispatch(deleteTodos(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)