$(document).ready(function() {

  var params = getHashParams();

  $('#create-playlist').click(function() {
    var country = $('#selected-country').val();
    var beatroute = new Beatroute(params.access_token)
    beatroute.runBeatroute(country);
  })


});
