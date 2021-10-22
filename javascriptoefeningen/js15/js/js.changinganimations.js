function ratestar(){
    var a;
    a = document.getElementById("div1"); // ophalen van je element, voor je variabele a
    a.innerHTML = "&#xf006"; // a in je html en wat het moet zijn
    setTimeout( function (){
        a.innerHtml = "&#cf123";
    }, 1000;

    setTimeout( function (){
        a.innerHtml = "&#xf005"
    }, 2000; // seconden die worden toegepast om afbeelding te laten
    setTimeout( function () {
        a.innerHtml =
    }
}
ratestar();
setInterval(ratestar, 1000);