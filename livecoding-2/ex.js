var a , b , aString , bString , operation ;


function onclickNumbre(number) {
    

if(aString == undefined){ aString = number}
else{ bString = number}

afficher()
    
}



function afficher(number ) {

    var afficher = document.getElementById("afficher")
    afficher.value = ""

if( a != undefined && b!= undefined && operation != undefined )
{afficher.value = number}

else{

    if (aString != undefined ) {afficher.value += aString }
    if (operation != undefined ) {afficher.value += operation }
    if (bString != undefined ) {afficher.value += bString }
        
    
}
    
}

function Operation(operationparam) {

    if( operation == undefined ){ operation = operationparam}

    afficher ()
    
}


function egaLe() {

a = parseFloat(aString)
b = parseFloat(bString)

resulta = calcul(a,b,operation)

    afficher(resulta)
}


function calcul(a,b,operation) {
    
resulta = undefined

switch (operation) {
    case "+":
        resulta = a+b
        break;

    default:
        break;
}

return resulta
}