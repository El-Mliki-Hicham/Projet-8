// Variables
var a,b,solution,operation;
var aChaineDecaracteres, bChaineDecaracteres;



// Métier
function Calculer(a,b,operation){
    var _solution = undefined;
    switch (operation) {
        case '+':
            _solution = a + b;
            break;
        case '-':
            _solution = a-b;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickSurnombre(number){
    if(a == undefined){
        if(aChaineDecaracteres == undefined) aChaineDecaracteres = '';
        aChaineDecaracteres += number;
    } 
    else {
        if(bChaineDecaracteres == undefined) bChaineDecaracteres = '';
        bChaineDecaracteres += number;
    } 

    Afficher();
}

function Afficher(number){

    var afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(a != undefined && b != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(aChaineDecaracteres != undefined)
        afficheur.value += aChaineDecaracteres 
        if(operation != undefined)
            afficheur.value += operation     
        if(bChaineDecaracteres != undefined)
            afficheur.value += bChaineDecaracteres 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        a = parseFloat(aChaineDecaracteres);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
  
    b = parseFloat(bChaineDecaracteres);
    solution = Calculer(a,b,operation);
    Afficher(solution);
}

function Init(){
    a = undefined;
    b = undefined;
    aChaineDecaracteres = undefined;
    bChaineDecaracteres = undefined;
    operation = undefined;
    var afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}