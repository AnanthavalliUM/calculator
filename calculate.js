let result = document.getElementById("inputtext");

let calculate=(number) => {
    result.value +=number;
}


let Output=() => {
    try {
        result.value = eval(result.value);
    }
    catch(err) 
    {
        alert("Only numbers are allowed")
    }
}
function clear() {
    result.value = " ";
}
function del() {
    result.value = result.value.slice(0,-1);
}