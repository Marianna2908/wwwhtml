//ES5

const myClass = document.querySelectorAll('.resultaat');
var myArray= Array.prototype.slice.call(myClass);

myArray.forEach(function(el){
    el.style.color= "red";
});

//ES6

myArray.forEach(el => el.style.color="green");

