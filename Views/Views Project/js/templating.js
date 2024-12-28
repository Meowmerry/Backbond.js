/*
* Views > Templating

## Introduction

Templating Solutions
- Underscore.js
- Mustache.js
- Handlebars.js

*/

const Song = Backbone.Model.extend();

const SongView = Backbone.View.extend({
  render: function () {
    // this.$el.html(this.model.get('title') + ' <button>Listen</button>');

    const tamplate = _.template($('#songTemplate').html());
    const html = tamplate(this.model.toJSON());
    this.$el.html(html);

    return this;
  }
})

const song = new Song({ title: 'Blue in Green', plays: 1001 });

const songView = new SongView({ el: '#container', model: song });
songView.render();