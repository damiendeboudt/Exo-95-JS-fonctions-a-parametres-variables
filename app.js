
let result = document.getElementById("para")


function paramVar (...param1) {
    result.innerHTML = "Bonjour "
    for (let name of param1) {
        result.innerHTML += name + ", "
    }

    result.innerHTML = result.innerHTML.trim().slice(0, -1);
}
paramVar("dam", "Jean", "Didier")










function numVar (...param1) {
    result.innerHTML += "<br>" + "Result "
    for (let number of param1) {
        result.innerHTML += number + number
    }

    //result.innerHTML = result.innerHTML.trim().slice(0, -1);
}
numVar(32, 10)

