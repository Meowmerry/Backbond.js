
const AddTodoItemsView = Backbone.View.extend({

  initialize: function (options) {
    if (!(options && options.model)) {
      throw new Error("model is not specified.");
    }
  },

  events: {
    "click #add": "onClickAdd",
    "keypress #newTodoItem": "onKeyPress"
  },

  onKeyPress: function (e) {
    if (e.keyCode == 13)
      this.onClickAdd();
  },

  onClickAdd: function () {
    const $textBox = this.$("#newTodoItem");

    if ($textBox.val()) {

      const todoItem = new TodoItem({ description: $textBox.val() });
      this.model.add(todoItem);

      $textBox.val("");
    }
  },

  render: function () {
    this.$el.append("<input type='text' autofocus id='newTodoItem'></input>");
    this.$el.append("<button id='add'>Add</button>");
    return this;
  }
})