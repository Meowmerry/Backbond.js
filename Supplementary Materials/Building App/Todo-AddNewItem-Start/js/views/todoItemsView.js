// Create the todoItemsVies with collection view
const TodoItemsView = Backbone.View.extend({
  // tagName: 'ul',

  // id: 'todoItems',
  id: "todoItemsContainer",

  // Create initialize method to check if the options model, if we didn't pass the model
  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("model is not specified.");

    this.model.on("add", this.onAddTodoItem, this);
    this.model.on("remove", this.onRemoveTodoItem, this);
  },

  // onRemoveTodoItem
  onRemoveTodoItem: function (todoItem) {
    // console.log('onRemoveTodoItem', todoItem.attributes)
    this.$('li#' + todoItem.id).remove()
  },

  // Create addTodoItem method
  onAddTodoItem: function (todoItem) {
    // Assign a unique ID to the todo item
    // todoItem.set('id', this.nextId++);

    // Create a new TodoItemView with the updated model
    var view = new TodoItemView({ model: todoItem });
    this.$("#todoItems").append(view.render().$el);
  },


  render: function () {
    var template = $("#todoItemsTemplate").html();
    var html = Mustache.render(template);
    this.$el.html(html);

    return this;
  }
})

