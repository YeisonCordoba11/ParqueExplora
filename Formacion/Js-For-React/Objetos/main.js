const user = {
    nombre: 'Andres',
    apellido: 'Cordoba',
    edad: 22,
        direccion : {
            pais: 'Colombia',
            ciudad: 'Medellin',
            calle: 'Main stret29',
        },
    amigos:['Jose', 'Johan'],
    active: true,
    sendEmail(){
        return "Mensaje enviado..."
    },
};

console.log(user.direccion.ciudad)
console.log(user.amigos)
console.log(user.sendEmail)



//OBJETOS COMO PARAMETROS
const users = {
    name: 'Joe',
    age: 30
}

function printInfo(users){
    return '<h1>Hola ' + users.name + ' </h1>'
}

//MOSTRAR EN EL DOM
console.log(printInfo(users))
document.body.innerHTML = printInfo(user)