'use strict';

function User(oAuthToken) {
  this.url = 'https://api.spotify.com/v1/me';
  this.oAuthToken = oAuthToken;
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
