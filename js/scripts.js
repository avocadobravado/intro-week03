// Back end logic
var pingPong = function(count) {
  var result = [];
  for(var i = 1; i <= count; i++) {
    if (i % 15 === 0) {
      result.push("pingpong");
    } else if (i % 3 === 0) {
      result.push("ping");
    } else if (i % 5 === 0) {
      result.push("pong");
    } else {
      result.push(i);
    }
  }
  return result;
};

// Front end logic
$(function() {

});
