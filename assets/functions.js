
// named function
function myNamedFunction() {

    console.log('hello from myNamedFunction');
}

// kald til named function
myNamedFunction();


// anonymous functions 

let anon = function () {
    console.log('Anonymous function');
};

//kaldes ved variable navn
anon();


// arrow function
let arrow = () => {
    console.log('arrow function');
};
//kaldes ved variabel navn
arrow();


// eks på brug af anonymous og arrow functions.

const myArrowFuncTrigger = document.getElementById('arrow');

myArrowFuncTrigger.addEventListener('click', e => {
    e.preventDefault();
    console.log("arrowfunction trigger: " + e);
});

const anoFunctionTrigger = document.getElementById('ano');

anoFunctionTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("anonymous trigger: " + e.clientX);
});





myNamedFunktionArg(34, 65);
// function med arguments

function myNamedFunktionArg(argOne, argTwo) {
    console.log('argument one: ' + argOne + ' argument two: ' + argTwo);

}





// arrow function med arguments
let arrowArg = (argOne, argTwo) => {
    console.log('argument one: ' + argOne + ' argument two: ' + argTwo);
};

arrowArg(12, 23);



//returning function
console.log('returning from function: ' + returningFunction(10, 20));

function returningFunction(valOne, valTwo) {
    return valOne + valTwo

}



