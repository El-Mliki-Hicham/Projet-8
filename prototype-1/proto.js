var aString
var bString
var operation
var a
var b
// var total

function ClickSurnombre(number) {




    if (aString == undefined) {
        aString = number
    } else {
        bString = number
    }

    afficheur()
}

function afficheur(number) {
    var afficheur = document.getElementById("afficheur")
    afficheur.value = ''

    if (a != undefined && b != undefined && operation != undefined) {
        afficheur.value = number
    } else {
        if (aString != undefined) {
            afficheur.value += aString
        }
        if (operation != undefined) {
            afficheur.value += operation
        }
        if (bString != undefined) {
            afficheur.value += bString
        }
    }

}


function Operation(operationParm) {
    if (operation == undefined)
     {     operation = operationParm }

    afficheur()
}

// function Egale() {
//     a = parseFloat(aString);
//     b = parseFloat(bString);

//     total = calculate(a, b, operation)

//     afficheur(total)

// }

// function calculate(a, b, operation) {
//     var _total = undefined

//     switch (operation) {
//         case "+":
//             _total = a + b
//             break;
//          case "-" :
//             _total = a-b 
//             break;

//         default:""
//             break;
//     }

//     return _total
// }