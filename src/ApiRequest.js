'use strict';

function ApiRequest(country) {
  this.url = 'https://api.discogs.com/database/search?country=';
  this.country = country;
  this.key = '&key=wCLjKbdaipyYgYYlKimb';
  this.secret = '&secret=qdMqNkUQufQxRUizeCEtZSXSmcTOtYwd';

}

ApiRequest.prototype.sendRequest = function() {
  this.request = new XMLHttpRequest();
  this.request.open('GET', this.url + this.country + this.key + this.secret, false);
  this.request.send();
};
