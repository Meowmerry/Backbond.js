
const AddTodoItemsView = Backbone.View.extend({
  id: "todoItemsContainer",
  initialize: function (options) {
    if (!(options && options.model)) {
      throw new Error("model is not specified.");
    }
  },

  events: {
    // "click #add": "onClickAdd", --> Remove the Add button out
    "keypress #newTodoItem": "onKeyPress"
  },

  onKeyPress: function (e) {
    if (e.keyCode == 13) {
      var $textBox = this.$("#newTodoItem");

      if ($textBox.val()) {
        var todoItem = new TodoItem({ title: $textBox.val() });
        this.model.create(todoItem);

        $textBox.val("");
      }
    }
  },

  // Comment out to remove the Add button 
  // onClickAdd: function () {
  //   const $textBox = this.$("#newTodoItem");

  //   if ($textBox.val()) {

  //     // const todoItem = new TodoItem({ description: $textBox.val() });
  //     const todoItem = new TodoItem({ title: $textBox.val() });
  //     // add to save todoItem
  //     // todoItem.save()
  //     // this.model.add(todoItem);

  //     // Or we can replace two line above with model.create()
  //     this.model.create(todoItem)
  //     $textBox.val("");
  //   }
  // },

  // render: function () {
  //   this.$el.append("<input type='text' autofocus id='newTodoItem'></input>");
  //   this.$el.append("<button id='add'>Add</button>");

  //   return this;
  // }

  // ** Using with template with https://mustache.github.io/mustache.5.html
  render: function () {
    var template = $("#todoItemsTemplate").html();
    var html = Mustache.render(template);
    this.$el.html(html);

    return this;
  }
})