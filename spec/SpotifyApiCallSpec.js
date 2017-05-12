'use strict';

describe('SpotifyApiCall', function() {

  var spotifyApiCall;
  var testString = 'the+clash+lost+in+the+supermarket';
  var testArrayMultiple = ['the+clash+lost+in+the+supermarket', 'the+smiths+this+charming+man'];
  var invalidTestArray = ["雀羅+壊胎"];
  var testIdArray = ['72boGlgSwUK01n44O2tOCv','1FvDJ9KGxcqwv1utyPL3JZ'];
  var halfValidArray = ["雀羅+壊胎", 'the+smiths+this+charming+man'];
  var elevenSongArray = ['blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2', 'blur+song+2'];

  beforeEach(function() {
      spotifyApiCall = new SpotifyApiCall(testArrayMultiple);
  });

  it('sends request and receives response', function() {
    spotifyApiCall.sendRequest(testString);
    expect(spotifyApiCall.request.status).toEqual(200);
  });

  it('should return the id for testArray-track', function() {
    expect(spotifyApiCall.getTrackId(SpotifyDemoData())).toEqual('72boGlgSwUK01n44O2tOCv');
  });

  it('creates an array of track ids from the supplied array', function() {
    spotifyApiCall.lookUpAndStoreTrackIds(testArrayMultiple);
    expect(spotifyApiCall.idArray).toEqual(['72boGlgSwUK01n44O2tOCv','1FvDJ9KGxcqwv1utyPL3JZ' ])
  })

  it('creates a string of formatted track IDs', function() {
    expect(spotifyApiCall.generatePlaylistString(testIdArray)).toEqual('spotify%3Atrack%3A72boGlgSwUK01n44O2tOCv,spotify%3Atrack%3A1FvDJ9KGxcqwv1utyPL3JZ');
  });

  it('does not try to add tracks that spotify does not recognise', function() {
    spotifyApiCall.lookUpAndStoreTrackIds(invalidTestArray);
    expect(spotifyApiCall.idArray).toEqual([])
  })

  it('only processes valid tracks', function() {
    spotifyApiCall.lookUpAndStoreTrackIds(halfValidArray);
    expect(spotifyApiCall.idArray).toEqual(['1FvDJ9KGxcqwv1utyPL3JZ'])
  })

  it('only processes 10 tracks', function() {
    spotifyApiCall.lookUpAndStoreTrackIds(elevenSongArray);
    expect(spotifyApiCall.idArray.length).toEqual(10)
  })

});
