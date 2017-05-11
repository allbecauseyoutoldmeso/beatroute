'use strict';

function PlaylistMaker(userId, playlistString) {
  this.playlistString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = 'BQD6O6OvF0JTZgv30E21BQUmyfHIwlEZpJ4vhG6ndi_NifiMgjbrqi2bTyD7U-DFMO3bGshsaoUdvo4_acN06XQsw1W6BHNY9SI7dQ-QYCq8XZGYveFCjoT2nga9r34-rn5IORvPOySWHtRSxkb1s6IUQXXS9CI4_ZZWiC3w84RPLjXt0hSGdSi6cSWxJiMSiFfmW9Tl3NZWY09C2MCBAjMTxu6hPkbq2g6sNaf0t6a77rfzU9IIMGz7uaBg2LIt5FIga9i8yQ';
}

PlaylistMaker.prototype.makeEmptyPlaylist = function(callback) {
  this.playlistId = ''
  $.ajax(this.url, {
		method: 'POST',
		data: JSON.stringify({
			'name': 'beetroute playlist',
			'public': false
		}),
		dataType: 'json',
		headers: {
			'Authorization': 'Bearer ' + this.oAuthToken,
			'Content-Type': 'application/json'
		},
		success: function(response) {
      callback(response.id)
		},
  });
};

PlaylistMaker.prototype.addTracksToPlaylist = function(playlistId) {
  $.ajax(this.url + '/' + playlistId + '/tracks?position=0&uris=' + this.playlistString, {
  	method: 'POST',
  	dataType: 'text',
  	headers: {
      'Authorization': 'Bearer ' + this.oAuthToken,
  		'Content-Type': 'application/json'
  	},
  	success: function() {
  		console.log('tracks added!');
  	},
	});
};

//var pl = new PlaylistMaker('allbecauseyoutoldmeso', 'spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh,spotify%3Atrack%3A1301WleyT98MSxVHPZCA6M');
//pl.makeEmptyPlaylist(function(r) { pl.addTracksToPlaylist(r) });
