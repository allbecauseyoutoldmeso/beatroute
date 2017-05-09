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

//jsonObj.results[0].title.split(' - ');
//jsonObj.results[19].title.split('-')[0].replace(' (2)','').replace('*','').trim()
//...and then render as a series of hashes with key/value pairs artist: x and song: y
//jsonObj.results.forEach (function(song) { console.log(song.title.split(' - ')) });
