const Song = Backbone.Model.extend(); // Song model
const SongCollection = Backbone.Collection.extend({ // Song collection
  model: Song,

})

const SongView = Backbone.View.extend({ // Song view
  tagName: 'li',
  className: 'song-list',
  attributes: {
    'data-genre': 'Jazz'
  },

  render: function () {
    // this.$el.html("Hello World");
    this.$el.html(this.model.get('title')); // Render only the title
    this.$el.attr('id', this.model.id); // Set the id attribute of the <li> element to the id of the song model
    return this;
  },
})

// Create a list of songs and pass it to the view
const SongsView = Backbone.View.extend({
  // using in the render method
  initialize: function () {
    this.model.on("add", this.onSongAdded, this);
    this.model.on("remove", this.removeSong, this);
  },

  onSongAdded: function (song) {
    // console.log('Song added');
    const songView = new SongView({ model: song }); // Create a new song view and pass the song model to it
    // this.$el.append(songView.render().$el);
    this.$('ul').append(songView.render().$el); // Append the rendered
  },

  removeSong: function (song) {
    // console.log('Song removed');
    this.$el.find('li#' + song.id).remove(); // using find method to find the <li> element with the id of the song model and remove it
    // Or this.$('li#' + song.id).remove();
    this.$('li#' + song.id).remove();

  },

  render: function () {
    const ul = $('<ul></ul>');
    this.model.each(function (song) {
      const songView = new SongView({ model: song }); // Create a new song view and pass the song model to it
      // this.$el.append(songView.render().$el);

      ul.append(songView.render().$el); // Append the rendered <li> to the <ul>

    }, this);
    // Append the <ul> to the view's main element
    this.$el.html(ul);
    return this;
  }
})

// const song = new Song({ title: 'Blue in Green' });
const songCollection = new SongCollection([
  new Song({ title: 'Blue in Green', id: 1 }),
  new Song({ title: 'So What', id: 2 }),
  new Song({ title: 'All Blues', id: 3 }),
]);

const songsView = new SongsView({ el: '#container', model: songCollection }); //-> Passing the song model to the view when creating the view
songsView.render();

// const songView = new SongView({ el: '#container', model: song }); //-> Passing the song model to the view when creating the view
// We can render the view and then append it to the container element with the following code:
// songView.render();

// $("#container").html(songView.$el);

// -- OR --
// $("#container").html(songView.render().$el);


// Views > Passing Data to Views
