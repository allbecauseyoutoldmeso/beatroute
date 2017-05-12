'use strict';

function Beatroot(oAuthToken) {
  this.oAuthToken = oAuthToken;
}

  Beatroot.prototype.getUserId = function() {
    var user = new User(this.oAuthToken);
    user.requestUserData();
    this.userId = user.getUserId(user.jsonParseResponse());
  };

  Beatroot.prototype.callDiscogs = function(country) {
    var discogsApiCall = new DiscogsApiCall(country);
    discogsApiCall.sendRequest();
    discogsApiCall.getTrackArray(discogsApiCall.jsonParseResponse());
    this.formattedTrackArray = discogsApiCall.formatTrackArray();
  };

  Beatroot.prototype.callSpotify = function () {
    var spotifyApiCall = new SpotifyApiCall(this.formattedTrackArray);
    spotifyApiCall.lookUpAndStoreTrackIds(this.formattedTrackArray);
    this.playlistString = spotifyApiCall.generatePlaylistString(spotifyApiCall.idArray);
  };

  Beatroot.prototype.createPlaylist = function () {
    var playlist = new PlaylistMaker(this.userId, this.playlistString, this.oAuthToken);
    playlist.makeEmptyPlaylist(function(r) { playlist.addTracksToPlaylist(r); });
  };
