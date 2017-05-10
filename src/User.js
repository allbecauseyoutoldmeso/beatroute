'use strict';

function User() {
  this.url = 'https://api.spotify.com/v1/me';
  this.oAuthToken = 'BQB9UBk_BO4olq5m6xzaY3iJigPrbaNg-x15v0_WR3vpvWICWDbgupdZjFyo9KwKxGvKmRiEuT20JPaFVQigZiiUr10SBFG-r6CpMTGRVirVyLNZEe7t0wrXkdJt2IYtwvJe2KQiQOOcvDWV-JWLIJ1c5eDSKonPuP5EnS3dEHAaRzmsRN4V2-HyD2zL6AsuFfcBVNyEqRw8M0keb6XzGBE5l1n0xXUdyBJmheIVvwb9iNm7k55gDs4S8Bo1dJCWzzAbznz9KQ';
}

User.prototype.requestUserData = function() {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url, false);
  this.request.setRequestHeader('Authorization' , 'Bearer ' + this.oAuthToken);
  this.request.send();
};

User.prototype.jsonParseResponse = function() {
  var parsedObject = JSON.parse(this.request.responseText);
  return parsedObject;
};

User.prototype.getUserId = function(parsedObject) {
  return parsedObject.id;
};

//user.requestUserId()
//user.getUserId(user.jsonParseResponse())
