const Venue = Backbone.Model.extend()
const Venues = Backbone.Collection.extend({
  model: Venue
})

const VenueView = Backbone.View.extend({
  tagName: 'li',
  initialize: function (options) {
    this.bus = options.bus; // Make sure 'bus' is correctly initialized
  },
  className: 'venue',

  events: {
    "click": "onClick"
  },

  onClick: function () {
    // Ensure 'this.bus' is available and trigger the event correctly
    if (this.bus) {
      this.bus.trigger("venueSelected", this.model); // Trigger the 'venueSelected' event
    }
  },

  render: function () {
    this.$el.html(this.model.get('name'))
    return this
  },
})

const VenuesView = Backbone.View.extend({
  tagName: 'ul',

  id: 'venues',

  initialize: function (options) {
    this.bus = options.bus  // Make sure 'bus' is passed to VenuesView
  },

  render: function () {
    const self = this
    this.model.each(function (venue) {
      const view = new VenueView({ model: venue, bus: self.bus }); // Pass 'bus' to each VenueView
      self.$el.append(view.render().$el)
    })
    return this
  },

})

const MapView = Backbone.View.extend({
  el: '#map-container',

  initialize: function (options) {
    this.bus = options.bus;
    this.bus.on("venueSelected", this.onVenueSelected, this); // Listen to or Subscript to the 'venueSelected' event

  },

  onVenueSelected: function (venue) {
    this.model = venue; // Set the model when a venue is selected
    this.render();
  },

  render: function () {
    if (this.model) {
      this.$('#venue-name').html(this.model.get('name')); // Render the venue's name on the map
    }
    return this;
  },
})


const bus = _.extend({}, Backbone.Events); // Event bus to communicate between views

// Sample venue data
const venues = new Venues([
  new Venue({ name: '30 Mill Espresso' }),
  new Venue({ name: 'Platform Espresso' }),
  new Venue({ name: 'Mr Foxx' }),
  new Venue({ name: 'Meow' }),
  new Venue({ name: 'Todd' }),
])

// Create VenuesView and render it
const venuesView = new VenuesView({ model: venues, bus: bus });
$('#venues-container').html(venuesView.render().$el);

// Create MapView and pass the bus to it
const mapView = new MapView({ bus: bus });
mapView.render();
