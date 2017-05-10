$(document).ready(function() {

  // var spotifyApiCall = new SpotifyApiCall();
  // var discogsApiCall = new DiscogsApiCall();

  $('#displayTitle').click(function(){
    spotifyApiCall.getTrackId(queryArray);
  });

});
