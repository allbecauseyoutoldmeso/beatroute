$(document).ready(function() {

  var params = getHashParams();

  $('#create-playlist').click(function() {
    var country = $('#selected-country').val();
    var beatRoot = new Beatroot(params.access_token)
    beatRoot.runBeatroot(country);

  })


});
