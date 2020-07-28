import { createSelector } from 'reselect'

const selectorTodos = (state) => state.todos  

export const selectTodos = createSelector([selectorTodos], todos => todos.todos)

export const selectSingleTodo = id => createSelector([selectTodos], todos =>{
	const todo = todos.find(todo => todo.id === id)
	return todo
})