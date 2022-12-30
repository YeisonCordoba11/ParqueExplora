//OBJETOS COMO PARAMETROS
const users = {
    name: 'Joe',
    age: 30
}

function printInfo(users){

    const {name, age} = users;

    console.log(name, age)

    return '<h1>Hola ' + users.name + ' </h1>'
}

//MOSTRAR EN EL DOM
console.log(printInfo(users))
document.body.innerHTML = printInfo(user)