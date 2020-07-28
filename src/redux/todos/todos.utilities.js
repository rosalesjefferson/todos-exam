export const todoToDelete = (previousTodos, todoIdToDelete) =>{
	const newTodos = previousTodos.filter(todo => todo.id !== todoIdToDelete)
	return newTodos
}

export const todoToUpdate = (previousTodos, newTodo) =>{
	const newTodos = previousTodos.map(todo =>{
		if(todo.id === newTodo.id){
			return { id: todo.id, todo: newTodo.todos }
		}else{
			return todo
		}
	})
	return newTodos
}