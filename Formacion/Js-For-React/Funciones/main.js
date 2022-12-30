function hello(){
    return 'Hola mundo'
}

const result = hello()
console.log(result)


//FUNCIONES ANONIMAS
const button = document.createElement('button')
button.innerText = 'click me '


//creando la funcion anonima
button.addEventListener('click', function(){
    alert('clicked')
})

//que se visualice en el dom
document.body.append(button)