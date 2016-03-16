var Google = require('./../js/google.js').Google;

$(document).ready(function() {
  var newGoogle = new Google();
  $('#locateUser').click(function() {
    newGoogle.initMap();
  });
  $('#locateLocal').click(function() {
    newGoogle.bicycle();
  });

  $('#checkBars').click(function() {
    newGoogle.bars();
  });
});
