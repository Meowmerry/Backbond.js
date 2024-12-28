// Collections > Connecting to the server
const Songs = Backbone.Collection.extend({
  model: Song,
  url: '/api/songs',

})

var songs = new Songs()
// GET: /api/songs?page=2
songs.fetch({// GET: /api/songs
  data: {
    page: 2
  },
  success: function () {
    console.log('success')
  },
  error: function () {
    console.log('error')
  }
})


Backbone.sync = function (method, model) {
  alert(method + ": " + model.url);
};

var accounts = new Backbone.Collection;
accounts.url = '/accounts';

accounts.fetch(); // GET: /accounts