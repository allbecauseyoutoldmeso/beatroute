'use strict';

describe('SpotifyApiCall', function() {

  var spotifyApiCall;
  var testArray = ['the+clash+lost+in+the+supermarket'];

  beforeEach(function() {
      spotifyApiCall = new SpotifyApiCall(testArray);
  });

  it('sends request and receives response', function() {
    spotifyApiCall.sendRequest();
    expect(spotifyApiCall.request.status).toEqual(200);
  });

  it('should return the id for testArray-track', function() {
    expect(spotifyApiCall.getTrackId(SpotifyDemoData())).toEqual('3RGLhK1IP9jnYFH4BRFJBS');
  });

});
