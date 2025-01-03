describe("Album", function () {
  let album;

  beforeEach(function () {
    album = new Album()
  })

  afterEach(function () {

  })

  it("url should be /api/songs", function () {
    expect(album.url).toEqual('/api/songs')
  })

  describe("getPopularSong", function () {
    it('should return undefined if the collection is empty', function () {
      expect(album.getPopularSong()).toBeUndefined()
    })

    it("should return the song with the highest number of plays if the collection is not empty.", function () {

      const song1 = new Song({ title: "Blue in Green", numberOfPlays: 10 });
      const song2 = new Song({ title: "So What", numberOfPlays: 5 });

      album.add(song1)
      album.add(song2)

      expect(album.getPopularSong()).toEqual(song1)

    })
  })

})