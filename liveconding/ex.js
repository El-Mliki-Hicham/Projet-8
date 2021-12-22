
var a,b,aString,bString,resulta,operation;

function oncklikNumbre(number) {
    if(aString == undefined){aString=number}
    else{ bString += number}
    afficher()
    
}


function afficher(number) {
    var afficher = document.getElementById("afficher")
    afficher.value = ""

    if (a != undefined && b != undefined && operation != undefined )
    { afficher.value = number }
else {
if (aString != undefined ) { afficher.value += aString}
if (operation != undefined ) { afficher.value += operation}
if (bString != undefined ) { afficher.value += bString}

}
}

function Operation(operationParm) {

    if ( operation== undefined)
    {operation= operationParm}
 afficher()   

}

function egaLe() {
    a= parseFloat(aString);
    b= parseFloat(bString);

resulta = caLcul(a,b,operation)

afficher(resulta)
}


function caLcul(a,b, operation) {
 
 var resulta = undefined
 
switch (operation) {
    case "+":
        resulta = a+b
        break;
    case "-":
        resulta = a-b

        break;

        case "*":
        resulta = a*b

        break;

    default:
        break;
}
return resulta
}