'use strict';

describe('User', function() {

  var user;

  beforeEach(function () {
    user = new User();
  });

it('extracts the user ID from the user data', function() {
  expect(user.getUserId(userDemoData())).toEqual('allbecauseyoutoldmeso')
});

});
