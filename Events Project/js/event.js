/*
Binding and triggering custom events
- Backbone.Events is a module that can be mixed into any object to provide it with custom events.
- It allows you to bind and trigger custom events.
- It can be mixed into any object using the _.extend() method.
- It can be used to bind and trigger custom events on any object.
- It can be used to bind and trigger custom events on the global object.
- It can be used to bind and trigger custom events on the Backbone.Events object.
- It can be used to bind and trigger custom events on the Backbone.Model object.
- It can be used to bind and trigger custom events on the Backbone.Collection object.
- It can be used to bind and trigger custom events on the Backbone.View object.
- It can be used to bind and trigger custom events on the Backbone.Router object.
- It can be used to bind and trigger custom events on the Backbone.History object.
- It can be used to bind and trigger custom events on the Backbone.sync object.
- It can be used to bind and trigger custom events on the Backbone.LocalStorage object.
- It can be used to bind and trigger custom events on the Backbone.Validation object.
- It can be used to bind and trigger custom events on the Backbone.Marionette object.
- It can be used to bind and trigger custom events on the Backbone.Wreqr object.
- It can be used to bind and trigger custom events on the Backbone.BabySitter object.
- It can be used to bind and trigger custom events on the Backbone.Radio object.
- It can be used to bind and trigger custom events on the Backbone.Rivets object.
- It can be used to bind and trigger custom events on the Backbone.Stickit object.
- It can be used to bind and trigger custom events on the Backbone.Validation object.




*/

const person = {
  name: "John",
  walk: function () {
    this.trigger("walking", {
      speed: 1,
      startTime: "08:00",
    });
  }
}
// .extend() method is used to add the Backbone.Events methods to the person object
_.extend(person, Backbone.Events);

person.on("walking", function (e) { // to subscribe to the event
  console.log("Person is walking");
  console.log("Event Args", e);
}, this);

person.once("walking", function (e) { // to subscribe to the event only once
  console.log("Person is walking");
  console.log("Event Args", e);
}, this);

// person.off("walking"); // to unsubscribe from the event

person.walk(); // Person is walking

person.walk(); // Person is walking

person.walk(); // Person is walking
