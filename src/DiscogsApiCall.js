'use strict';

function DiscogsApiCall(country) {
  this.url = 'https://api.discogs.com/database/search?&format=single&country=';
  this.country = country;
  this.key = '';
  this.secret = '';

}

DiscogsApiCall.prototype.sendRequest = function() {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url + this.country + this.key + this.secret, false);
  this.request.send();
};

DiscogsApiCall.prototype.jsonParseResponse = function() {
  this.parsedObject = JSON.parse(this.request.responseText);
  return this.parsedObject;
};

DiscogsApiCall.prototype.getTrackArray = function(parsedObject) {
    this.trackArray = [];
    for(var x = 0; x < 10; x++) {
    this.trackArray.push(parsedObject.results[x].title);
    }
};

DiscogsApiCall.prototype.formatTrackArray = function() {
  var formattedTracks = [];
  this.trackArray.forEach (function(track) {
    formattedTracks.push(track.replace(' -' , '').replace('*','').replace(/[(]\d[)]\s/g,'').split(' ').join('+'));
  });
  return formattedTracks;
};

//DA = new DiscogsApiCall('Sweden');
//DA.sendRequest();
//DA.getTrackArray(DA.jsonParseResponse());
//DA.formatTrackArray()
