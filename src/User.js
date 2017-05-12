'use strict';

function User() {
  this.url = 'https://api.spotify.com/v1/me';
  this.oAuthToken = 'BQDcErmWP-mdPi80qObcRCAVMTzMBgCtMuvab85udB1OOml9GH5YsFvElV2B7krleTpB9SAyIBfa8pl7p1R_fDFcOUNQh8nDqKsfuSWS-pGTo7RgA9tCDn_Atgglb5k-07a1UdppuCgHzP_ZfiWyaMrHSsHdb8N5a5BDvcy4VEhCkv6uWgn_tUMdBSPH8f5Q7KqbdogyMtS5kjkoRRTK0WQXkZaVQ-Y0nfleRjSF_a3GjboGmIzQWivMJEwSS23hq00m-o_vcspcP2mq0mAupfthmQAc1WCxP9qQmLiju5SsSa8DPeOIldAzVPR-8JDffjMrMe6Cu-H4eUJn';
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

//to get the user id run:
//var user = new User()
//user.requestUserData()
//user.getUserId(user.jsonParseResponse())
