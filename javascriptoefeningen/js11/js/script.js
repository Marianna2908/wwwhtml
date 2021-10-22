window.onload=function (){
    var binnen = document.getElementById("binnen");
    var buiten = document.getElementById("buiten");
    var x = 0;
    var z = 0;

    binnen.onmousemove = function (){
        binnen.innerHTML = x +=1;
    }
    binnen.onmouseover = function (){
        binnen.style.backgroundColor = "#FAC";
    }
    binnen.onmouseout = function (){
        buiten.innerHTML += "De muis beweegt uit het vierkant <br>";
        binnen.style.backgroundColor = "#FFF0";
    }
    binnen.onmousedown = function (){
        binnen.innerText += z+1;
    }
    binnen.onmouseleave = function (){
        binnen.innerHTML += z-1; // deze code zal alleen vervangen orden door een div
    }
}