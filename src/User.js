'use strict';

function User() {
  this.url = 'https://api.spotify.com/v1/me';
  this.oAuthToken = 'BQDfE1jcL1ksXmLkJQu-c02WwnV02bgxkuZLzwFnx9SzWrQK-_cOC6yopF6fwf1UEF2AEg18xxN234gtwOWm-YDAz7EMgPyX-LWOV1uOvOXoMIYd1swQg_2unGB4JVlCLMSK_g_xOk0Y_D7apmmTx_tIYTgNJzd1M7wtb0DwEd_r_dt1ACA28Jd1kHaWHrKqIjw-AsfuoYmCgERe98VuSQrgqLiJ812PbSLG-_26RhCqwsE4kL_UeN5aWYLAvqM9QAWaaRDqCw';
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
