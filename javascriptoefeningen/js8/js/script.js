var source = document.getElementById("source");

var innerHtmlOutput = document.getElementById("innerHtmlOutput");
var innerTextOutput= document.getElementById("innerTextOutput") ;
var txtContentOutput = document.getElementById("txtContentOutput")

innerHtmlOutput.value = source.innerHTML;
txtContentOutput.value = source.innerText
innerTextOutput.value = source.innerText;

