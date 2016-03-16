var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#mapLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
      $('.showMap').text("The humidity in " + city + " is%");
  });
});

// we can do directions
//  styled maps
// amount of time it will take to get to a place
