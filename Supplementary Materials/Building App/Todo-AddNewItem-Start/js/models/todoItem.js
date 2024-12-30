const TodoItem = Backbone.Model.extend({
  // add vaidation to make sure the descrition should required
  validate: function (attrs) {
    if (!attrs.description) {
      return "Description is required.";
    }
  }
})