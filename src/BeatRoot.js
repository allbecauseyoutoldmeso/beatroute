'use strict';

function Beatroot() {
}

  Beatroot.prototype.getUserId = function() {
    var user = new User();
    user.requestUserData();
    this.userId = getUserId(user.jsonParseResponse());
  }

  Beatroot.prototype.callDiscogs = function(country) {
    var discogsApiCall = new DiscogsApiCall(country);
    discogsApiCall.sendRequest();
    discogsApiCall.getTrackArray(discogsApiCall.jsonParseResponse());
    this.formattedTrackArray = discogsApiCall.formatTrackArray();
  }

  Beatroot.prototype.callSpotify = function () {
    var spotifyApiCall = new SpotifyApiCall(this.formattedTrackArray);
    spotifyApiCall.lookUpAndStoreTrackIds(this.formattedTrackArray);
    this.playlistString = spotifyApiCall.generatePlaylistString(spotifyApiCall.idArray);
  }

  Beatroot.prototype.createPlaylist = function () {
    var playlist = new PlaylistMaker(this.userID, this.playlistString);
    playlist.makeEmptyPlaylist(function(r) { playlist.addTracksToPlaylist(r) });
  }
