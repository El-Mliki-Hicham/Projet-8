var a 
var b 
var aString
var bString
var operation







function onclickNumbre(numbre) {
    if (aString == undefined)
    {aString = numbre}
    else {bString = numbre}

afficher()

}



function afficher(numbre) {

var afficher=document.getElementById("afficher")
    if(a != undefined && b !=undefined && operation != undefined){afficher.value="" }

else {

if(aString != undefined){ afficher.value += aString}
if(operation != undefined){ afficher.value += operation}
if(bString != undefined){ afficher.value += bString}




}
}