define(['underscore', 'backbone', 'models/song', 'views/songView'], function (_, Backbone, Song, SongView) {

  const initialize = function () {

    const song = new Song({ title: "Blue in Green" })

    const songView = new SongView({ el: "#container", model: song })
    songView.render()

  }

  return {
    initialize: initialize
  }

})


// require(['app'], function (App) {
//   App.initialize();
// });
