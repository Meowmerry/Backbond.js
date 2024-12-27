const Song = Backbone.Model.extend(); // Song model
const SongCollection = Backbone.Collection.extend({ // Song collection
  model: Song,

})

const SongView = Backbone.View.extend({ // Song view
  tagName: 'li',
  className: 'song-list',
  id: 'song-list-id',
  attributes: {
    'data-genre': 'Jazz'
  },
  render: function () {
    // this.$el.html("Hello World");
    this.$el.html(this.model.get('title'));
    return this;
  },
})

// Create a list of songs and pass it to the view
const SongsView = Backbone.View.extend({
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
  new Song({ title: 'Blue in Green' }),
  new Song({ title: 'So What' }),
  new Song({ title: 'All Blues' }),
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
