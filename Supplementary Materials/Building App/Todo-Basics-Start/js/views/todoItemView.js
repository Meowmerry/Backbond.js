const TodoItemView = Backbone.View.extend({
  tagName: 'li',

  // Create initialize method to check if the options model, if we didn't pass the model
  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("model is not specified.");
  },

  render: function () {
    this.$el.html(this.model.get('description'))
    return this
  }
})