'use strict';

describe('ApiRequest', function() {

  var apiRequest;

  beforeEach(function() {

  apiRequest = new ApiRequest('Norway');

  });

  it('sends a request and receives a valid response', function() {
    apiRequest.sendRequest();
    expect(apiRequest.request.status).toEqual(200);
  });

});
