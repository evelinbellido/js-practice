
document.addEventListener('DOMContentLoaded', function() {
    //el boton submit inicia desabilitado
    document.querySelector('#submit').disabled = true;
    //se llama al form input y se utilza la propiedad de key up inicia la funcion que cunado se deja de escribir se habilta el boton de submit
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    //se obtiene el form y cuando se envia submit inicia la funcion que declara una constante que trae el valor del input y imrime en l consola
    document.querySelector('form').onsubmit  = () => {
        const task = document.querySelector('#task').value;
        console.log(task);
//declara una constante que crea un elemento list item dentro de unorderd list y agrega el valor de la constante task
        const li = document.createElement('li');
        li.innerHTML = task;
// trae a la lista y agrega un elemento
        document.querySelector('#tasks').append(li);
// llama al input para que se depeje luego de agregar un elemento
        document.querySelector('#task').value = '';

        document.querySelector('#submit').disabled = true;
        

        return false;
    }
})
