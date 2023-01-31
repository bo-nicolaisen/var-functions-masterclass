


/*
funktionsbeskrivelse:
lave en lommeregner der kan lægge to tal sammen.
den skal vise følgende i konsollen.
Dit resultat er:
234 (resultatet fra funktionen)
*/

myAdd(1, 20);

mySubtraction(27, 2);

myMultiplication(10, 30);


function myAdd(valueOne, valueTwo) {

    let myResult = valueOne + valueTwo;

    myView(myResult, 'Dit plus stykke er:')
}


function myMultiplication(valueOne, valueTwo) {

    let myResult = valueOne * valueTwo;

    myView(myResult, 'Dit gange stykke er:')
}



function mySubtraction(valueOne, valueTwo) {

    let myResult = valueOne - valueTwo;

    myView(myResult, 'Dit minus stykke er:');


}

myPokeMon();

function myPokeMon() {


    let name = 'pikachu';
    let des = 'pokemon'
    myView(name, des);

}


function myView(myData, myDescription) {

    console.log(myDescription);
    console.log(myData);
}











