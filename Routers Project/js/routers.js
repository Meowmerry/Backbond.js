/*

* * Routers > Creating Single Page Applications
# Single Page Applications
  - Routing is done on the client
  - When a suer clicks a link, the client presents a new view on the same page
  - No page reload (hence faster)
  - Most/all resources are on the client.
  - The cliend Chagne the brouwsers address and present the new content

*/

// Each page create a backbond view to show each page on single page application
const ArtistsView = Backbone.View.extend({
  render: function () {
    this.$el.html("ARTISTS VIEW PAGE")
    return this;
  }
})

const AlbumsView = Backbone.View.extend({
  render: function () {
    this.$el.html("ALBUMS VIEW PAGE")
    return this;
  }
})


const GenresView = Backbone.View.extend({
  render: function () {
    this.$el.html("GENRES VIEW PAGE")
    return this;
  }
})

// Create a router to responde event handeler 
const AppRouter = Backbone.Router.extend({
  routes: {
    "albums": "viewAlbums",
    "albums/:albumId": "viewAlbumById",
    "artists": "viewArtists",
    "genres": "viewGenres",
    "*other": "defaultRoute"
  },

  viewArtists: function () {
    const view = new ArtistsView({ el: "#container" })
    view.render()
  },

  viewGenres: function () {
    const view = new GenresView({ el: "#container" })
    view.render()
  },

  defaultRoute: function () {

  },

  viewAlbumById: function (albumId) {

  },

  viewAlbums: function () {
    const view = new AlbumsView({ el: "#container" });
    view.render()
  }

})


const router = new AppRouter()
// Call Backbond.history.start to tell backbone to start monitoring browser address changes
Backbone.history.start()


// Create a view and attach to nav 
const NavView = Backbone.View.extend({
  events: {
    "click": 'onClick'
  },

  // handle each router change
  onClick: function (e) {
    const $li = $(e.target)
    router.navigate($li.attr("data-url"), { trigger: true })
  }
})

const navView = new NavView({ el: '#nav' })