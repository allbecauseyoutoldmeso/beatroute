$(document).ready(function() {

  $('#selected-country').change(function() {
    var country = $('#selected-country').val();
    CallDiscogs(country);
  });

  function CallDiscogs(country) {
    var discogsApiCall = new DiscogsApiCall(country);
    discogsApiCall.sendRequest();
    discogsApiCall.getTrackArray(discogsApiCall.jsonParseResponse());
    var formattedTrackArray = discogsApiCall.formatTrackArray();
    return formattedTrackArray;
  }

  function CallSpotify() {

  }







});
