//bifurcacione
//aqui recibe los 2 valor a procesar
//el prompt si no es especificado que tipo de valor ingresa simepre va ingresar un string entonces se convierte al valor que se desa recibir si seria un integer seria //con parseint
var val1 = prompt("ingrese su primer valor");
var val2 = prompt("ingreso su segundo valor");
//inicia el swicht con boolean
    switch (true) {
        //en el caso 1 valida la comparacion de val1 y val2
        case (val1 > val2):
            //imprime si el val1 es mayor a val2
            console.log("VALOR 1 MAYOE Q 2");
            //si este caso es true rompe aqui si no avanza a caso 2
            break;
        //aqui viene si no se cumplio el caso 1
        //valida la comparacion de valores
        case ( val2 > val1):
            //si cumple imprime q val2 es mayor a val1
            console.log("VALOR 2 MAYOR QUE 1");
            //rompe el  caso aqui
            break;
        //si ninguno de los casos se cumple llega aqui imprimiendo error
        default:
            console.log("error");
            break;
}
