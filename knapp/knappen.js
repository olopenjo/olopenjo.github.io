
let tal=0

function plusclick(){
    tal=tal+1
    console.log("click")
    
    
    document.getElementById("svar").innerHTML = tal
}

const minusknappen = document.getElementById("minusclick")
minusknappen.addEventListener("click", minusclick)

function minusclick(){
    tal = tal-1
    document.getElementById("svar").innerHTML = tal
}