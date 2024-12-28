/*

* * Routers > Creating Single Page Applications
# Single Page Applications
  - Routing is done on the client
  - When a suer clicks a link, the client presents a new view on the same page
  - No page reload (hence faster)
  - Most/all resources are on the client.
  - The cliend Chagne the brouwsers address and present the new content


* ** Routers > Pros and cons of SPA (Single Page Applications)
- Pros: (Fast and smooth UX)
You notice that doing so involves writing more code, especially for routing and presenting views with multi-page applications. 
We never have to do this stuff. Plus, there is another issue with single page application, and that is search engine optimization or SEO.
Search engine spiders by default cannot index a single page application because at the time a search  engine spider visits your website, the content is not loaded yet, so it cannot be indexed.
I have read about some techniques that can resolve this issue, but they are not easy.

- Cons:  (Complicated, and Lack of Index-ablility * SEO *)
on the flip side, single page applications provide a fast and a smooth user experience to the user.


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