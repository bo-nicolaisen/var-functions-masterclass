

// defining
const myKonstant = 'hej jeg er en konstant';
let myLet = 123;


var myVar = { name: 'var' };

//setting
//myKonstant = 123;
//myLet = 'not in function scope';
//myVar.name = 'bob';
//myCoolFunction();





console.log(myKonstant + ' datatype: ' + typeof (myKonstant));
console.log(myLet + ' datatype: ' + typeof (myLet));
console.log(myVar.name + ' datatype: ' + typeof (myVar));




function myCoolFunction() {
    let myLet = 'in function scope';
    console.log(myLet);
}

