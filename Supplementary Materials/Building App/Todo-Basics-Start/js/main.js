
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function () {
  // const todoItem = new TodoItem({ description: "TodoItem 1" })

  // const todoItemVew = new TodoItemView({ model: todoItem });
  // $('body').append(todoItemVew.render().$el)

  const todoItems = new TodoItems([// TodoItems from collections
    new TodoItem({ description: "TodoItem 1" }),
    new TodoItem({ description: "TodoItem 2" }),
    new TodoItem({ description: "TodoItem 3" })
  ])

  const todoItemsView = new TodoItemsView({ model: todoItems });
  $("body").append(todoItemsView.render().$el);
})