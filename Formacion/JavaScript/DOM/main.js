
//inicializar lo que se va a utilizar 
const txtn1 = document.getElementById('n1');
const txtn2 = document.getElementById('n2');
const respuesta = document.getElementById('resp');
const btncalcular = document.getElementById('calcular');

//lo que respondera al dar click
btncalcular.addEventListener("click");


//funcion que se utiliza como la logica 
function calcular() {
    const op1 =parseFloat( txtn1.value)
    const op2 =parseFloat( txtn2.value)
    let resp = op1 + op2
    respuesta.innerText = resp
}