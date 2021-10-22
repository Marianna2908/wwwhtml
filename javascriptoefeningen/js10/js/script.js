function getInputValue(){
    var naam = document.getElementById("").value;
    document.getElementById("resultaat").innerHTML= naam;


}
document.body.onload = addElement; /* Eventhanlder*/

var newContent = document.createTextNode;

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
}
