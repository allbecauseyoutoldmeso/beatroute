$(document).ready(function() {

  $('#selected-country').change(function() {
    var country = $('#selected-country').val();
    CallDiscogs(country);
  });

});
