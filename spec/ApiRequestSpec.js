'use strict';

describe('ApiRequest', function() {

  var apiRequest;

  beforeEach(function() {

  apiRequest = new ApiRequest('Norway');

  });

  it('sends a request and receives a valid response', function() {
    var response = apiRequest.sendRequest();
    expect(response.status).toEqual(200);
  });

});
