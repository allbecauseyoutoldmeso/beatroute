'use strict';

function Beatroute(oAuthToken) {
  this.oAuthToken = oAuthToken;
}

Beatroute.prototype.getUserId = function() {
  var user = new User(this.oAuthToken);
  user.requestUserData();
  this.userId = user.getUserId(user.jsonParseResponse());
};

Beatroute.prototype.callDiscogs = function(country) {
  var discogsApiCall = new DiscogsApiCall(country);
  discogsApiCall.sendRequest();
  discogsApiCall.getTrackArray(discogsApiCall.jsonParseResponse());
  this.formattedTrackArray = discogsApiCall.formatTrackArray();
};

Beatroute.prototype.callSpotify = function () {
  var spotifyApiCall = new SpotifyApiCall(this.formattedTrackArray);
  spotifyApiCall.lookUpAndStoreTrackIds();
  this.playlistString = spotifyApiCall.generatePlaylistString();
};

Beatroute.prototype.createPlaylist = function (country) {
  var playlist = new PlaylistMaker(this.userId, this.playlistString, this.oAuthToken, country);
  playlist.makeEmptyPlaylist(function(r) { playlist.addTracksToPlaylist(r); });
};

Beatroute.prototype.runBeatroute = function(country) {
  this.getUserId();
  this.callDiscogs(country);
  this.callSpotify();
  this.createPlaylist(country);
};
