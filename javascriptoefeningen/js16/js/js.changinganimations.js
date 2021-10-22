// definiren van je tabel + not te controlen met code tom
// data ophalen uit je kolommen

function zoekNamen(){
    var input,filter,table,tr,td,i,txtValue;

    input=document.getElementById("muInput"); // filter variabele maken! opletten gebruiker kan grote en kleine letters ingeven.
    filter= input.value.toUpperCase(); // filter die je ingeeft op wat het moet filteren: zit in de filter variabelen.//
    table = document.getElementById( "myTable");
    tr = document.getElementsByTagName("TR"); // uit je html, array gaan doorlopen ,
//    alle rijen laten doorlopen
    for(i=0; i< tr.length; i++){ // testen hoelang die lengte is, van 0 tot nr 3 tot die row +*
        td=tr[i].getElementsByTagName("TD")[0]; // table data die wordt opgehaalt, td tag vanuit je html, get element, ke start op 0de elementje pak de td van die element, bekijk de naam van 0
        if(td){ // td is je naam: tom vb
            txtValue = td.textContent || td.innerText; // je hebt de content nodig  vandaar de td en contect en innertext
            if(txtValue.toUpperCase().indexOf(filter) > -1){ // minstens 1 karakter die wordt ingetypt, dat wil de index of wil zeggen, die gaat zoeken naar de eerste index maar de filter is gelijk
                tr[i].style.display=""; // hier gaat hij tonen
            }else{
                tr[i].style.display="none";// anders gaat hij het niet weergeven , door else te gebruiken,
            }
        }
    }
}
// for en een for en zien hoeveel kolommen je hebt, [0] gaat gaan zien in de eerste kolom + als correct in stipit zetten! zodat je die code altijd hebt!!!!!
// je kan dit ook gebruiken voortodo lijsjtje
// * door kolommen uit de breiden; kan je ipv tr de td gebruiken in de loop