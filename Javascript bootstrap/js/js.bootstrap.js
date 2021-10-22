/** es5
 * var is functionscoped
 */


function functionScoped(test){
    if(test){
        var naam ="Tom" /* var kan je dooorheen je programma gebruiken*/
    }
    console.log(naam);

}
functionScoped(true)

/** programma*//

functionScoped(true);


/** es6*
 * blockscoped
 * *
 */

function blocksScoped(test){
    if(test){
        let naam ="Tom" /* let, als zelfde variabele gebruiken,2aparte vakjes maarzelfde naam*/
        console.log(naam);
    }

}
blocksScoped(true);

/** NOTATIE : NAMED FUNCTION
 * function naam(parameter, parameter,...){ RETURN variabele, array }
 *
 * **/

var eenNaam= function sum(a,b){
    return a + b;
}
eenNaam(1,3);
/** NOTATIE: ANONIMOUS FUNCTION
 * function, parameter( parameter, parameter,...) { RETURN variabele, array}
 * */


var geenNaam= function (a,b){
    return a + b;
}
geenNaam(1,3);

/** VOORBEELD: ZELF GESCHREVEN FUNCTIE
 *
 */
function berekenLeeftijd(gJ){
    return huidigJaar- gJ;

}
var huidigJaar=2021;
var geboorteJaar= prompt("geef je geboorte jaar in:, YYYY");


(geboorteJaar > huidigJaar){
    var geboorteJaar= prompt("geef je geboorte jaar in:, YYYY");

}
var resultaat = berekenLeeftijd(geboorteJaar)
console.log(resultaat);

