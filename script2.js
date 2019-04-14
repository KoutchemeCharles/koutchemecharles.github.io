/**
 * JQuery
 */

$(document).ready(function(){
  
  $("textarea").keypress(function(){
    var keycode = event.which;
    if(keycode == '13') {
      var input = document.getElementById("textarea").value;
      var inputText = $.trim(input);
      switch(inputText) {
        case 'help':
        case 'Help':
        case 'HELP':
          Help();
          break;
        case 'about':
        case 'About':
        case 'ABOUT':
          About();
          break;
        case 'clear':
        case 'Clear':
        case 'CLEAR':
          Clear();
          break;
        default:
          Output("unknow command");
          break;
      }
      // clear the output
      $("#textarea").val('');
    }
  });
});

function Output(textData) {
  // create a p which will hold the text data;
  var p = document.createElement("p");
  var textNode = document.createTextNode(textData);
  p.appendChild(textNode);
  // output is a div which will contain all text;
  var output = document.getElementById("output");
  // adding the div inside the main div (output zone)
  output.appendChild(p);
}

function Help() {
  Output("Available commands:");
  Output("--> help");
}

function Clear() {
  var output = document.getElementById("output");
  while (output.hasChildNodes)
    output.removeChild(output.firstChild);
}

function About() {
  Output("Hello world, my name is Charles");
}