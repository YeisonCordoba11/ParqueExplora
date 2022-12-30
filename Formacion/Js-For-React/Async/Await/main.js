let data = fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(){
    console.log('finalizo la carga')
})

async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    cosnole.log(data)
}