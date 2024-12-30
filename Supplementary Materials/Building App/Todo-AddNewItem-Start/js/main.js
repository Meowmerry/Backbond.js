
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function () {

	// Initialize the collection ---> as an empty array 	const todoItems = new TodoItems([])
	const todoItems = new TodoItems([// TodoItems from collections
		new TodoItem({ description: "TodoItem 1" }),
		new TodoItem({ description: "TodoItem 2" }),
		new TodoItem({ description: "TodoItem 3" })
	])



	// Initialize the views
	const todoItemsView = new TodoItemsView({ model: todoItems });
	const addTodoItemsView = new AddTodoItemsView({ model: todoItems });

	// Render and append the views into the DOM
	$("body").append("<div id='addTodoItemsContainer'></div>");
	$("body").append("<div id='todoItemsContainer'></div>");

	$("#addTodoItemsContainer").html(addTodoItemsView.render().$el);
	$("#todoItemsContainer").html(todoItemsView.render().$el);
})