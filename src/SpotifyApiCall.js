'use strict';

function SpotifyApiCall(array) {
  this.url = "https://api.spotify.com/v1/search?query=";
  this.searchLimit = '&type=track&offset=0&limit=1';
  this.array = array;
};

SpotifyApiCall.prototype.sendRequest = function (trackString) {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url + trackString + this.searchLimit, false);
  this.request.send();
};

SpotifyApiCall.prototype.getTrackId = function(trackObject) {

  return trackObject.tracks.items[0].id;
};
