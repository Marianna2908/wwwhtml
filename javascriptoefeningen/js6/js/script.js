document.body.onload = addElement; /* Eventhanlder*/

function addElement(){
    // een nieuwe div criëren met de property createElements
    var newDiv= document.createElement("div");
    // toevoegen van tekst aan de nieuwe div
    var newContent = document.createTextNode("Hallo fuck stack developers");
    // voeg de tekst toe aan de nieuwe div
    newDiv.appendChild(newContent);
    // voeg de div toe aan een locatie binnen in de bodytag
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
//