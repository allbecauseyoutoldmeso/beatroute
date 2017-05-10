$(document).ready(function() {

  function track(queryArray) {
    var artistAndTrackString = queryArray[6];
    var url = "https://api.spotify.com/v1/search?query=" + artistAndTrackString + '&type=track&offset=0&limit=1';

    $.get(url, function(data) {
      goToUrl(data.tracks.items[0].id);
    });
  }

  function goToUrl(id) {
    window.location.replace('spotify:track:' + id);
  }

  $('#displayTitle').click(function(){
    track(queryArray);
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
