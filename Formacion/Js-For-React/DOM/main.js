const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'


// SE REALIZA LA LOGICA PARA DAR EL CLICK
button.addEventListener('click', function(){
    title.innerText = 'Texto actualizado con JS'
    alert('Se realizo un click')
})

//PARA QUE SE VISUALICE EN EL BODY 
document.body.append(title)
document.body.append(button)

//Append= espera un elemento creado por javascript