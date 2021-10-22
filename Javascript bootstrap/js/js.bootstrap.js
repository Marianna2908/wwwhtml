// // /** es5
// //  * var is functionscoped
// //  */
// //
// //
// // function functionScoped(test){
// //     if(test){
// //         var naam ="Tom" /* var kan je dooorheen je programma gebruiken*/
// //     }
// //     console.log(naam);
// //
// // }
// // functionScoped(true)
// //
// // /** programma*//
// //
// // functionScoped(true);
// //
// //
// // /** es6*
// //  * blockscoped
// //  * *
// //  */
// //
// // function blocksScoped(test){
// //     if(test){
// //         let naam ="Tom" /* let, als zelfde variabele gebruiken,2aparte vakjes maarzelfde naam*/
// //         console.log(naam);
// //     }
// //
// // }
// // blocksScoped(true);
// //
// // /** NOTATIE : NAMED FUNCTION
// //  * function naam(parameter, parameter,...){ RETURN variabele, array }
// //  *
// //  * **/
// //
// // var eenNaam= function sum(a,b){
// //     return a + b;
// // }
// // eenNaam(1,3);
// // /** NOTATIE: ANONIMOUS FUNCTION
// //  * function, parameter( parameter, parameter,...) { RETURN variabele, array}
// //  * */
// //
// //
// // var geenNaam= function (a,b){
// //     return a + b;
// // }
// // geenNaam(1,3);
// //
// // /** VOORBEELD: ZELF GESCHREVEN FUNCTIE
// //  *
// //  */
// // function berekenLeeftijd(gJ){
// //     return huidigJaar- gJ;
// //
// // }
// //
// //
// // var geboorteJaar= prompt("geef je geboorte jaar in:, YYYY");
// //
// // while(isNaN(geboorteJaar) || geboorteJaar.length !== 4){
// //     var geboortejaar= prompt("Geboortejaar in cijfers  en maximum 4 cijfers aub YYYY")
// // }
// // while (geboorteJaar > new Date().getFullYear() || geboortejaar <1 ){
// //     var geboorteJaar= prompt("geboortejaar is kleiner dan huidig jaar en mag niet negatief zijn, YYYY");
// // }
// //
// // // while(isNaN(geboorteJaar) || geboorteJaar > huidigJaar){
// // //     var geboorteJaar = prompt("u heeft geen nummer gebruikt of geboortejaar is kleiner dan huidig jaar")
// // // }
// // var resultaat = berekenLeeftijd(geboorteJaar);
// // console.log(resultaat);
//
//
// /** Verschillen in es5 en es6**/
//
// //es5
// let naam ="Tom";
// document.write("Mijn naam is:" + naam +'<br>')
//
// //es6
// document.write("Mijn naam is: ${naam}")
//
// let getal1= 5;
// let getal2= 6;
//
// document.write('de som van : ${getal1} +'{getal2} is ${som(getal1, getal2)}' +"<br>);
//
// /** ARRAY**/
// const arrayGetallen =[1000,2000,3000,4000,5000];
// //es5
// var verschil = arrayGetallen.map(function(el){
//     return5000-el;
// });
// document.write(' ${verschil}' + "<br>")
//
// //es6
// let verschiil2 = arrayGetallen.map(el =>5000- el);
// document.write(' ${verschil2}')