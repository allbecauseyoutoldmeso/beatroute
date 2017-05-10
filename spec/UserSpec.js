'use strict';

describe('User', function() {

  var user;

  beforeEach(function () {
    user = new User();
  });

it('successfully requests data about current user nb STOPS WORKING WHEN TOKEN EXPIRES', function() {
  user.requestUserData();
  expect(user.request.status).toEqual(200);
});

it('extracts the user ID from the user data', function() {
  expect(user.getUserID(UserDemoData)).toEqual('allbecauseyoutoldmeso')
});


});
