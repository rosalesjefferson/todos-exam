import TodosTypes  from './todos.types'
import { todoToDelete, todoToUpdate } from './todos.utilities'

const INITIAL__STATE = {
	todos: [
		{ id: '1123123123', todo: 'Jogging' },
		{ id: '5623423455', todo: 'Make a bread' },
		{ id: '6234234223', todo: 'Play logic games' },
		{ id: '9981233311', todo: 'Watch anime' },
	]
}

const todosReducer = (state=INITIAL__STATE, action) => {
	switch(action.type){
		case TodosTypes.ADD_TODOS:
		return{
			...state,
			todos: [ ...state.todos, action.payload ]
		}

		case TodosTypes.UPDATE_TODOS:
		return{
			...state,
			todos: [ ...todoToUpdate(state.todos, action.payload) ]
		}

		case TodosTypes.DELETE_TODOS:
		return{
			...state,
			todos: [ ...todoToDelete(state.todos, action.payload) ]
		}

		default:
			return state;
	}
}

export default todosReducer


