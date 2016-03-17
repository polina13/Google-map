var Food = require('./../js/food.js').Food;

$(document).ready(function() {
  $("#foodForm").submit(function(event) {
    event.preventDefault();
    var food = $("#foodInput").val();
    var newFood = new Food(food);
    $.get(newFood.getFood(), function(data) {
      for(var i=0; i<data.hits.length; i++) {
        $("#findfood").append(data.hits[i].fields.item_name);
      }
    });
  });
});
