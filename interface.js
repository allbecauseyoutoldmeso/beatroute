$(document).ready(function() {

  $('#displayTitle').click(function(){
    spotifyApiCall.getTrackId(queryArray);
  });

  $('#selected-country').change(function() {
    var country = $('#selected-country').val();
    CallDiscogs(country);
  });

  function CallDiscogs(country){
    var discogsApiCall = new DiscogsApiCall(country);
    discogsApiCall.sendRequest();
    discogsApiCall.getTrackArray(discogsApiCall.jsonParseResponse());
    var queryArray = discogsApiCall.formatTrackArray();
    console.log(discogsApiCall.formatTrackArray());
    track(queryArray);
  }
});
