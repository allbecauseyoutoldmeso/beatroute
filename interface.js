$(document).ready(function() {

  var beatroute = new Beatroute();

  // track('6rqhFgbbKwnb9MLmUQDhG6');

  function track(queryArray) {
    var artistAndTrackString = queryArray[0]
    var url = "https://api.spotify.com/v1/search?query=" + artistAndTrackString + '&type=track&offset=0&limit=1';
    $.get(url, function(data) {
      $('#song-title').text(data.tracks.items[0].id);
    })
  }

  $('#displayTitle').click(function(){
    track(queryArray);
  });

})
