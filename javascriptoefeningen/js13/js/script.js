// close button en toeveogen aan ieder list item
var myNodelijst = document.getElementsByTagName("LI")// de tag moet in een hoofdletter staan^.
console.log(myNodelijst)
var i;

for(i=0; i< myNodelijst.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelijst[i].appendChild(span);

}
//  click close butten en verberg item

var close = document.getElementsByClassName("close");
var i;

for(i=0; i< close.length;i++){
    close[i].onclick= function (){
        var div = this.parentElement;
        div.style.display = "none";
    }
} // de x die toegevoegd is, als je erop klikt, dan verdwijnen de item
// een checked symbool toevoegen wanneer we klikken op list item
var list = document.querySelector("LI");
list.addEventListener("click", function (event){
    if(event.target.tagName ==="LI"){
        event.target.classList.toggle("checked"); // aan uit knop is de toggle= zal een check class toevoegen.
    }
}, false);

// nieuw item toevoegen aan je todolist, wanneer we klikken op toevoegen
function newElement(){
    var li = document.createElement("LI");
    var inputValue= document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.className ="list-group";
    if(inputValue === ""){
        alert("vul keer iets in ");
       // de foutcontrole uitvoeren
    } else{
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    li.onclick = function (){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

