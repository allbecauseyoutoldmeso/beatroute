$(document).ready(function() {

  var queryArray = ['the+clash+lost+in+the+supermarket'];

  function track(queryArray) {
    var artistAndTrackString = queryArray[0];
    var url = "https://api.spotify.com/v1/search?query=" + artistAndTrackString + '&type=track&offset=0&limit=1';

    $.get(url, function(data) {
      goToUrl(data.tracks.items[0].id);
    });
  }

  function goToUrl(id) {
    window.location.replace('https://open.spotify.com/artist/' + id);
  }

  $('#displayTitle').click(function(){
    track(queryArray);
  });

});
