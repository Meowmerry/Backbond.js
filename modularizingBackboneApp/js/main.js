// var Song = Backbone.Model.extend({})

// const SongView = Backbone.View.extend({
//   render: function () {
//     this.$el.html(this.model.get('title'));

//     return this;
//   },
// });

// var song = new Song({ title: "Blue in Green" })

// var songView = new SongView({ el: "#container", model: song })
// songView.render()



require.config({
  paths: {
    jquery: "lib/jquery-min",        // Update with the relative path to jquery.js
    underscore: "lib/underscore-min", // Update with the relative path to underscore.js
    backbone: "lib/backbone-min",     // Update with the relative path to backbone.js
  },
});

define(['app'], function (App) {
  App.initialize()
})