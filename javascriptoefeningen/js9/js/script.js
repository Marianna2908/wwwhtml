var alleBMW = document.querySelectorAll(".bmw");
var resultaat = "document.getElementsBClassName('bmw')";


for(var i=0; i<alleBMW.length; i++){
    resultaat += "\n " + alleBMW[i].textContent;

}
document.getElementById("resultArea").value = resultaat;