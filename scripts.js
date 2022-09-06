
function passExam (name, score) {
    var passUni =  71;
    var passColl = 51;

    if(score >= passUni) {
        console.log(name + ' has enrolled in University with ' + score + ' points');
    }else if (score >= passColl) {
        nomb1.innerHTML= nombre + ' has enrolled in College with '+ score + ' points'
        // console.log(name + ' has enrolled in College with '+ score + ' points');
    }else {
        console.log(name + ' has failed')
    }

}

let nomb1 = document.getElementById("nom1")

let nombre = prompt("ingrese nombre")
let promedio = prompt("ingrese nota")
passExam(nombre, promedio)