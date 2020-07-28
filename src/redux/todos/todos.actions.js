import TodosTypes from './todos.types'

export const addTodos = todo =>({
	type: TodosTypes.ADD_TODOS,
	payload: todo
})

export const updateTodos = id =>({
	type: TodosTypes.UPDATE_TODOS,
	payload: id
})

export const deleteTodos = index =>({
	type: TodosTypes.DELETE_TODOS,
	payload: index
})