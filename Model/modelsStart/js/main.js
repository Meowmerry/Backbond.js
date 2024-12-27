var Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created.");
  },
  validate: function (attrs) {
    if (!attrs.title) {
      return "Title is required.";
    }
  },
  urlRoot: "/api/songs"
})

// var song = new Song({
//   title: "Blue in Green",
//   artist: "Miles Davis",
//   publishYear: 1959
// });

// ** Model > validate
var song = new Song();
song.isValid()


// To listen to the change event of the model using on method
song.on("change", function () {
  console.log("Song model has been changed.");
});
// To check if the model is valid using isValid method
// song.set("title", "Blue in Green");
// To get the attribute of the model using get method
// To set the attribute of the model using set method
// To remove the attribute of the model using unset method
// To check if the model has an attribute using has method
// To clear all the attribute of the model using clear method
console.log(song.get("title"));
song.has('title');

// var person = {}
// person.name = "Mosh";
// console.log(person.name);


//  ** Model > Inheritance
var Animal = Backbone.Model.extend({
  walk: function () {
    console.log("Animal is walking.");
  }
});

let Dog = Animal.extend({
  walk: function () {
    // Call the base implementation
    Animal.prototype.walk.apply(this);

    console.log("The Dog is walking.");
  }
})

let dog = new Dog();
dog.walk()

