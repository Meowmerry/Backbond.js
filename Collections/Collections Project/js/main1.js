const Song = Backbone.Model.extend()

const Songs = Backbone.Collection.extend({
  model: Song
})

const songs = new Songs([
  new Song({ title: "Song 1" }),
  new Song({ title: "Song 2" }),
  new Song({ title: "Song 3" })
])

songs.add(new Song({ title: "Song 4" }))  // add a new song to the collection

var firstSong = songs.at(0)  // get the first song in the collection
console.log(firstSong)

var songWithIdC1 = songs.get("c1")  // get the song with id "c1"

songs.remove(songWithIdC1)  // remove the song with id "c1"
songs.add(new Song({ title: "Song 5", genre: "Jazz", downloads: 110 }), { at: 0 })  // add a new song to the beginning of the collection
songs.push(new Song({ title: "Song 6", genre: "Jazz", downloads: 90 }))  // add a new song to the end of the collection
songs.pop()  // remove the last song from the collection
songs.unshift(new Song({ title: "Song 7", genre: "Jazz", downloads: 90 }))  // add a new song to the beginning of the collection
songs.shift()  // remove the first song from the collection

var jazzSongs = songs.where({ genre: "Jazz" })  // get all songs with genre "Jazz"
console.log({ jazzSongs }) // returns an array of songs
var firstJazzSong = songs.findWhere({ genre: "Jazz" })  // get the first song with genre "Jazz"
console.log({ firstJazzSong }) // returns a single song

var filteredSongs = songs.where({ genre: "Jazz", downloads: 90 })  // get all songs with genre "Jazz" and downloads 90
console.log({ filteredSongs }) // returns an array of songs
var firstFilteredSong = songs.findWhere({ genre: "Jazz", downloads: 90 })  // get the first song with genre "Jazz" and downloads 90
console.log({ firstFilteredSong }) // returns a single song


// filter the collection using a custom function
var topDownloads = songs.filter(function (song) {
  return song.get("downloads") > 100
})
console.log({ topDownloads }) // returns an array of songs


songs.each(function (song) {
  console.log(song)
})  // iterate over each song in the collection and log it to the console
