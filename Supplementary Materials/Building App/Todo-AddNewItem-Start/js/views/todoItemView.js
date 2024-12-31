const TodoItemView = Backbone.View.extend({
  tagName: 'li',


  // Create initialize method to check if the options model, if we didn't pass the model
  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("model is not specified.");

    // subscripe the change 
    this.model.on("change", this.render, this);
  },


  // handle checkbox
  events: {
    "click #toggle": "onClickToggle",
    "click #delete": "onClickDelete"
  },

  onClickDelete: function () {
    this.model.destroy();
  },

  onClickToggle: function () {
    // console.log('onClickToggle')
    this.model.toggle()
    this.model.save()
    // console.log(this.model.toJSON());
  },

  // render: function () {
  //   // this.$el.html(this.model.get('description'))
  //   this.$el.attr("id", this.model.id);

  //   this.$el.toggleClass("completed", this.model.get("isCompleted"));

  //   const checked = this.model.get("isCompleted") ? "checked" : "";
  //   const inputBox = "<input id='toggle' type='checkbox'" + checked + "></input>"
  //   const deleteBtn = "<button id='delete'>Delete</button>"
  //   this.$el.html(inputBox + this.model.escape("description") + deleteBtn);// using escape to be save, should not allow user to add script or js in text 
  //   return this
  // }

  // ** Using with API
  // render: function () {
  //   // this.$el.html(this.model.get('description'))
  //   this.$el.attr("id", this.model.id);

  //   this.$el.toggleClass("completed", this.model.get("completed"));

  //   const checked = this.model.get("completed") ? "checked" : "";
  //   const inputBox = "<input id='toggle' type='checkbox'" + checked + "></input>"
  //   const deleteBtn = "<button id='delete'>Delete</button>"
  //   this.$el.html(inputBox + this.model.escape("title") + deleteBtn);// using escape to be save, should not allow user to add script or js in text 
  //   return this
  // }

  // ** Using with template with https://mustache.github.io/mustache.5.html
  render: function () {
    this.$el.attr("id", this.model.id);

    this.$el.toggleClass("completed", this.model.get("completed"));

    const template = $("#todoItemTemplate").html();
    const html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);

    return this;
  }
})