//LITERALS 
const background = 'red'
const color = 'white'
const isAuthorized = true;




console.log(result)

const button = document.createElement("button");
button.innerText = "click me";
button.style = 'background: ; color: white;'
button.style = 'background: {background}; color: ${color}'


button.addEventListener("click",() => {
    if (isAuthorized){
        return alert ("esta autorizado");
    }

    //es un else sin llamas el ELSE
    alert("no esta autorizado");
});

document.body.append(button);