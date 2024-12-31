const TodoItems = Backbone.Collection.extend({
  // add model to collection
  model: TodoItem,
  url: 'https://jsonplaceholder.typicode.com/todos'
})

