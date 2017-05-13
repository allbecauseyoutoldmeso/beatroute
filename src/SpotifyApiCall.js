'use strict';

function SpotifyApiCall(array) {
  this.url = "https://api.spotify.com/v1/search?query=";
  this.searchLimit = '&type=track&offset=0&limit=1';
  this.array = array;
  this.idArray = [];
};

SpotifyApiCall.prototype.lookUpAndStoreTrackIds = function() {
  for(var i = 0; i < this.array.length; i++) {
    if(this.idArray.length < 10) {
      this.sendRequest(this.array[i]);
      var jsonObj = this.jsonParseResponse();
      if(jsonObj.tracks.items[0] != undefined) {
        this.idArray.push(jsonObj.tracks.items[0].id);
      }
    }
  }
};

SpotifyApiCall.prototype.sendRequest = function (trackString) {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url + trackString + this.searchLimit, false);
  this.request.send();
};

SpotifyApiCall.prototype.jsonParseResponse = function() {
  this.parsedObject = JSON.parse(this.request.responseText);
  return this.parsedObject;
};

SpotifyApiCall.prototype.generatePlaylistString = function() {

  var formattedStringsArray = [];
  var playlistUrlFormat = "spotify%3Atrack%3A";

  for(var i = 0; i < this.idArray.length; i++) {
    formattedStringsArray.push(playlistUrlFormat + this.idArray[i]);
  };

  var formattedStrings = formattedStringsArray.join();
  return formattedStrings;

};
