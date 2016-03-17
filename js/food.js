var apiKey = "4dc197c32aa5a931a1ef12b2859cdfe9";

exports.Food = function(food) {
  this.food = food;
};

exports.Food.prototype.getFood = function() {
  return 'https://api.nutritionix.com/v1_1/search/' + this.food + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=2e0d8e6b&appKey=' + apiKey;
};

// 4dc197c32aa5a931a1ef12b2859cdfe9
//
// 2e0d8e6b
