'use strict';

describe('SpotifyApiCall', function() {

  var spotifyApiCall;
  
  beforeEach(function() {
      spotifyApiCall = new SpotifyApiCall();
  });

  it('sends request and receives response', function() {
    spotifyApiCall.sendRequest();
    expect(spotifyApiCall.request.status).toEqual(200);
  })
});
