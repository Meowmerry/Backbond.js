
/*
Backbone.js
*** Views > Handling Model Events
    - Listen for changes to the model
    - Update the view when the model changes
    - Update the DOM when the view changes
    - Update the model when the user interacts with the view

** Real- time notifications:
 - Polling ( cliend keeps asking the server for updates)
 - Pushing ( server sends updates to the client)

*/


// Song model
const Song = Backbone.Model.extend({
  defaults: {
    listeners: 0
  }
});

// Song View
const SongView = Backbone.View.extend({
  events: {
    'click': 'incrementListeners',
    'click .decrement': 'decrementListeners'
  },

  initialize: function () { // listen for changes to the model
    this.model.on('change', this.onModelChange, this);
  },
  onModelChange: function () { // update the view
    // this.$el.addClass('song-button');
    this.render();
  },

  incrementListeners: function () {
    // Increment the listeners by 1
    const currentListeners = this.model.get('listeners');
    this.model.set('listeners', currentListeners + 1);
  },

  decrementListeners: function (event) {
    event.stopPropagation(); // Prevent the parent click event from firing
    const currentListeners = this.model.get('listeners');
    if (currentListeners > 0) {
      this.model.set('listeners', currentListeners - 1);
    }
  },

  render: function () { // render the view
    this.$el.html(this.model.get('title') + ' - Listeners: ' + this.model.get('listeners') + ' <button>Listen + </button>' + ' <button class="decrement">Listen - </button>');
    return this
  }
})

const song = new Song({ title: 'Blue in Green' });

const songView = new SongView({ el: '#container', model: song });
songView.render();