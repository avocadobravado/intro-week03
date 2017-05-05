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
    // Will allow results to display on page
    event.preventDefault();
    // Gather user input and convert to number
    var userInput = parseInt($("input#userInput").val());
    // Call pingPong function and pass in userInput as argument
    var input = pingPong(userInput);
    console.log(input);

  //   $("#userInput").text(input);
   //
   //

   //
  //   $("#result").append("<li>" + input + "</li>");
  });
});
