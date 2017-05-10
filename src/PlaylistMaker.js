'use strict';

function PlaylistMaker(userId, playlistString) {
  this.playListString = playlistString;
  this.url = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
  this.oAuthToken = 'BQC2N3xPxKwGFWsZmOU_icSj-kMrDemZT-kli6jg9k7a8pPUCbi2TbC8S3YiFwLZnlMtykzitAEac4n87eimSdQt-hZybiuwWyxcbq8JpzSuARZbDEeumZszgKkVrNrgA-nZ1IGo0x1sQlBLFCVEfmkifvgH9iZKo5IS9srarXjjNSGe9u7jk53tqZ8cGK_pJmOeVNp5H9bTp84Ehbv0XnRR55KJe56zljwbs1I6TbcmvM45spXLHBCtAEUBLvSZXUU7_JrIpA';
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

PlaylistMaker.prototype.addTracksToPlaylist = function() {
  $.ajax(this.url + '/2sc3qbnnmJiVBDG0t0qxPX/tracks?position=0&uris=' + this.playListString, {
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
