'use strict';

function PlaylistMaker(userId, playlistString) {
  this.playlistString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = 'BQBV_TRfpab4x0tdxSyagLirI6DdJV6tUUHzRQef84QL076zoKmBhu5OCqbV1DWT2kFCeBnG-MvVQIPZK35rbRwSe0xsnGECSHRqPKafZb5tyfYXkIhka5Ct41ptNoJun760M5cwvdKcoPBLfPCVP5G_-dY2fdNRPfbyx6mi_CHpfQ-8cnXgCrNo95eylpEL3vwwtQ2vZfuSqyxSJIeaiVaadumLysHG1ks';
}

PlaylistMaker.prototype.makeEmptyPlaylist = function(callback) {
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
      callback(response.id);
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
