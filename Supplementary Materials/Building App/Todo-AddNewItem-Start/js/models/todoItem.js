const TodoItem = Backbone.Model.extend({
  defaults: {
    isCompleted: false
  },

  // url: "fakeUrl",
  urlRoot: "http://jsonplaceholder.typicode.com/todos",

  // add vaidation to make sure the descrition should required
  validate: function (attrs) {
    // if (!attrs.description) {
    if (!attrs.title) {
      return "Title is required.";
    }
  },

  toggle: function () {
    this.set("completed", !this.get("completed"));
  }
})