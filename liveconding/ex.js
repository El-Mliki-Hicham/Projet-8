var a,b,aString,bString,operation,resulta ;



function oncklikNumbre(number) {
if (aString == undefined)
{aString = number }
else {bString = number}     
afficher()
}




function afficher(number) {
var afficher = document.getElementById("afficher")
afficher.value = ""

if (a!=undefined && b!=undefined && operation !=undefined ) {afficher.value = number}
else{
if (aString != undefined) {afficher.value += aString }
if (operation != undefined) {afficher.value += operation }
if (bString != undefined) {afficher.value += bString }


}

afficher()

}

function Operation(operationParam) {
    if (operation == undefined ) 
    {operation = operationParam}
    afficher()
}






function egaLe() {

a= parseFloat(aString)
b= parseFloat(bString)

var resulta = calcule(a,b,operation)

afficher(resulta)    
}


function calcule(a,b,operation) {
 resulta == undefined

 switch (operation) {
     case "+":
         resulta = a+b
         break;
 
     default:
         break;

        }

return resulta 
    }



    function suprime() {
     
     a= undefined
     aString= undefined
     bString= undefined
     b= undefined
     operation= undefined
     var afficher = document.getElementById("afficher")
     afficher.value =""
    }



  