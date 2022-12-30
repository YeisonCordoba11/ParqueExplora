// SPREAD OPERATORS
const user = {
    name: 'Aandres',
    lastname: 'Cordoba'
}

const address  ={
    street: 'main street 123',
    city: 'bogota'
}

const userInfo = {
    //usando spread operator 
    ...user,
    ...address
}

