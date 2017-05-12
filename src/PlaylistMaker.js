'use strict';

function PlaylistMaker(userId, playlistString) {
  this.playlistString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = 'BQBzHGmX1MzLjGYUHdQAi2j7UT7Ol5DL5_9PGwMaBm026Ga40GGyyzU_IrMlJ5UsMQ-FG5NnOqDs3yGte1voccT3HHQuJH_X3oD9omx6US7cRnaeo0d7MX_nv2hE2wRisgonttrKJsH6X5Qt1Rd1yP_MaWT0G8muWRS8SD-J5wrhbp1bCML3az5cu2am0QZpGPScWFxChBSbVAU9DV2zMzacg9keKk5lY68fDWxPJAaMIwqb1M8JbwI6rr406S-p8AgUky4rwW_AwvMzciZs2_FjN52S1Mp21ESu55QR-UcO2-uWq_G7ez6BFkGfP38w-IDUImNhQUyvQ5AN';
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
