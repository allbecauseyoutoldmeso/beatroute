'use strict';

function PlaylistMaker(userId, playlistString) {
  this.playListString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = 'BQD2zFbJmTqTe-eHnw9WeAOoeKBJBLagwbvznq9JoP1rXK3bGfIZ78aOe8eisTK4wt3fLV86_ImUEdTjh4ssSzrXwsrx2QDSkKuIcBEkXr6HtxSJchS1WENEmS5AHFmEkmb4Sp-F2Ul4ADTMMorobOqMIEZb3ay0nEPsb0FyPD_E8jYXVq4E12_EqkwOkK1pfTx4cQz1zKqR1F5ReEZ4IQp2NTQv91IZ4Ly3fKW2mtM3oApOftLYkBlwHxabOqXftDnI4dsoIg';
}

PlaylistMaker.prototype.makeEmptyPlaylist = function() {
  var playlistId;
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
			console.log('inside: ' + response.id);
      playlistId = response.id;
		},
  });
  console.log('outside: ' + playlistId);
};
