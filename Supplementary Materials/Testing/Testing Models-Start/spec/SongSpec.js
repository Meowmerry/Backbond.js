describe('Song', function () {
  let song;

  beforeEach(function () {
    song = new Song();
  })

  afterEach(function () {

  })
  // check urlRoot
  it("urlRoot should be /api/songs", function () {

    expect(song.urlRoot).toEqual('/api/songs')

  })
  // test defaults method
  it("numberofPlays attribute should be 0 by default.", function () {
    expect(song.get('numberOfPlays')).toEqual(0)
  })

  // test play method
  it("title it required.", function () {
    expect(song.isValid()).toBeFalsy()

    song.set('title', 'Blue in Green')
    expect(song.isValid()).toBeTruthy()
  })

  it("play should increment the numberOfPlays.", function () {
    song.play()
    expect(song.get('numberOfPlays')).toEqual(1)
  })
})