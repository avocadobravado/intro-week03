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
  $("#pingPongForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var input = pingPong(userInput);
    // Empty method removes all existing children in the DOM, allowing user to enter a new number and see new results multiple times
    $("#result").empty();
    input.forEach(function(num) {
      $("#result").append("<li>" + num + "</li>");
    });
    $("#result").fadeIn("slow");
  });
});
