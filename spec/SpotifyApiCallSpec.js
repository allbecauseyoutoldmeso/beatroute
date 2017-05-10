'use strict';

describe('SpotifyApiCall', function() {

  var spotifyApiCall;
  var testString = 'the+clash+lost+in+the+supermarket';
  var testArrayMultiple = ['the+clash+lost+in+the+supermarket', 'the+smiths+this+charming+man'];

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

});
