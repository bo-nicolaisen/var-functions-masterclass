


// kald til named function
myNamedFunction();

noFunction();

function noFunction() {

    console.log('hello world');
}



// named function med camel casing name convention
function myNamedFunction() {
    //function scope

    console.log('hello from myNamedFunction');

}


// anonymous functions 

let anon = function () {

    console.log('Anonymous function');
};


//kaldes ved variable navn
anon();




// arrow function

let arrow = => console.log('arrow function');



//kaldes ved variabel navn
arrow();





// arguments


myNamedFunktionArg(102, 200);

// function med arguments


function myNamedFunktionArg(argOne, argTwo) {

    let myResult = argOne + argTwo;


    console.log('result: ' + myResult);


}








/*
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



 */







// eks på brug af anonymous og arrow functions.

const myArrowFuncTrigger = document.getElementById('arrow');


myArrowFuncTrigger.addEventListener('click', (e) => {

    e.preventDefault();
    console.log("arrowfunction trigger: " + e.clientX);
});



const anoFunctionTrigger = document.getElementById('ano');

anoFunctionTrigger.addEventListener('click', function (e) {

    e.preventDefault();
    console.log("anonymous trigger: " + e.clientX);

});




/* const functionTrigger = document.getElementById('fun');




functionTrigger.addEventListener('click', myButtonFunction);




function myButtonFunction(e) {
    e.preventDefault();
    console.log("function trigger: " + e.clientX);
}
 */
