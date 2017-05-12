'use strict';

function PlaylistMaker(userId, playlistString, oAuthToken, country) {
  this.playlistString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = oAuthToken;
  this.userId = userId;
  this.country = country;
}

PlaylistMaker.prototype.makeEmptyPlaylist = function(callback) {
  $.ajax(this.url, {
		method: 'POST',
		data: JSON.stringify({
			'name': this.country + ' playlist by Beatroot',
			'public': false
		}),
		dataType: 'json',
		headers: {
			'Authorization': 'Bearer ' + this.oAuthToken,
			'Content-Type': 'application/json'
		},
		success: function(response) {
      callback(response.id);
		},
  });
};

PlaylistMaker.prototype.addTracksToPlaylist = function(playlistId) {
  var userId = this.userId;
  $.ajax(this.url + '/' + playlistId + '/tracks?position=0&uris=' + this.playlistString, {
  	method: 'POST',
  	dataType: 'text',
  	headers: {
      'Authorization': 'Bearer ' + this.oAuthToken,
  		'Content-Type': 'application/json'
  	},
  	success: function() {
  		console.log('tracks added!');
      window.location.replace('http://open.spotify.com/user/' + userId + '/playlist/' + playlistId);
  	},
	});
};
