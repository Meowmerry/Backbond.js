//  ** Model > Connection to the server

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

/*

    Client Side                     Server Side
    ----------                        ----------  
fetch() Model   -->   jQuery.ajax()  RESTful API


* Persisting Operations
- fetch() - GET
- save() - POST / PUT
- destroy() - DELETE



*/
var song = new Song();
// Callbacks 

// fetch a model
song.fetch({
  success: function () {
    console.log("Song fetched successfully.");
  },
  error: function () {
    console.log("Failed to fetch the song.");
  }
})

// Destroying a model
song.destroyed({
  success: function () {
    console.log("Song deleted successfully.");
  },
  error: function () {
    console.log("Failed to delete the song.");
  }
})

// Save a model to the server, it Hash of attributes to set and save
song.save({}, { // has to pass an empty object as the first argument
  success: function () {
    console.log("Song saved successfully.");
  },
  error: function () {
    console.log("Failed to save the song.");
  }
})






/*

  Client Side           Server Side
  ----------            ----------  
  Model                 Database
  Collection            Collection
  View                  View
  Router                Router
  Event                 Event
  Template              Template
  Sync                  Sync
  History               History
  Utility               Utility
  Validation            Validation
  Local Storage         Database
  Session Storage       Database
  Cookies               Database
  Web Storage           Database
  RESTful API           RESTful API
  JSON                  JSON  
  AJAX                  AJAX
  Web Socket            Web Socket
  Web Worker            Web Worker
  Promise               Promise
  Fetch API             Fetch API
  Service Worker        Service Worker
  IndexedDB             IndexedDB
  Cache API             Cache API
  Web Notification      Web Notification
  WebRTC                WebRTC
  Web Audio             Web Audio
  Web Speech            Web Speech
  Web Animation         Web Animation
  WebGL                 WebGL
  WebVR                 WebVR
  WebXR                 WebXR 
  WebGPU                WebGPU
  WebAssembly           WebAssembly
*/