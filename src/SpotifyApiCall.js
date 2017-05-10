'use strict';

function SpotifyApiCall(array) {
  this.url = "https://api.spotify.com/v1/search?query=";
  this.searchLimit = '&type=track&offset=0&limit=1';
  this.array = array;
};

SpotifyApiCall.prototype.sendRequest = function () {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url + this.array[0] + this.searchLimit, false);
  this.request.send();
};
