// Backbone View: handleDOMEvents
// - Render content to the DOM
// - Respond to DOM/model events
// - Handle user input
// - Update the model
// - Update the view
// - Update the DOM


// Song model
const Song = Backbone.Model.extend();

// Song View
const SongView = Backbone.View.extend({
  events: {
    "click": "onClick",
    "click .bookmark": "onClickBookmark"
  },

  onClick: function () {
    console.log('Listen Clicked');
  },

  onClickBookmark: function (e) {
    e.stopPropagation(); // using this method will prevent the click event from bubbling up to the parent element

    console.log('Bookmark Clicked');
  },
  render: function () {
    // this.model.get('title') + ' <button>Listen</button>'

    // this.$el.html(`<span style="color: blue; font-weight: bold;">${this.model.get('title')}</span>
    //   <button style="background-color: green; color: white; padding: 5px 10px; border: none; border-radius: 5px;">Listen</button>`);

    this.$el.html(`${this.model.get('title')} <button class="click">Listen</button> <button class="bookmark">Bookmark</button>`);
    this.$('button').css({
      'background-color': 'blue',
      'color': 'white',
      'padding': '5px 10px',
      'border': 'none',
      'border-radius': '5px',
      'cursor': 'pointer',
      'margin-left': '10px',
    });

    this.$el.css('color', 'green');
    this.$el.css('font-weight', '900');
    return this;
  }

})

const song = new Song({ title: 'Blue in Green' });
const songView = new SongView({ el: '#container', model: song });
songView.render();