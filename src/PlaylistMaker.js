'use strict';

function PlaylistMaker(userId, playlistString) {
  this.playlistString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = 'BQClXm1i0EWRaiTAqkFUPpNu5lSrwgc7bno3yhJa6oFWOQgd3yChgWrJmHYVF3-o798885umfe7Bo_lqjxJB43yLFWWSRrCkhy269YpVVvrlBdwoEmY4k5izcrKKfbTFD3LhRyOiu3p5d4FIFuJYSuLIfzxq13o0xQVNNCswEk-asbToMqU4CS-VP_zLhDlZ43GcLQJer6My4AsTQQDwAh_ibKGvFfrvcib6HTgv759fOX8HvX3BQREx2QdY98wwIYKvP64Gnw';
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
