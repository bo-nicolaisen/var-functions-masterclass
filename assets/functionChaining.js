
/* // function one
function functionOne() {

    functionTwo();

}

// funktion nr 2
function functionTwo() {

    console.log(1 + 2);

}


//functionOne();
functionTwo(); */



// trigger 
functionOne();



// function one
function functionOne() {
    console.log('funktion 1');

    functionTwo(10, 4000);

}

// funktion nr 2
function functionTwo(numberOne, numberTwo) {
    console.log('funktion 2');

    let myResult = addMe(numberOne, numberTwo);
    functionThree(myResult);
}


function addMe(valueOne, valueTwo) {
    console.log('add me');
    let myResult = valueOne + valueTwo;

    return myResult;
}



function functionThree(myData) {
    console.log('funktion 3');
    console.log(myData);
}




