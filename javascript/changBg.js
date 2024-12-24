document.getElementById("bgDark").onclick = () =>{
    document.querySelector("body").classList.remove("text-bg-light")
    document.querySelector("body").classList.add("text-bg-dark")
}

document.getElementById("bgLight").onclick = () =>{
    document.querySelector("body").classList.remove("text-bg-dark")
    document.querySelector("body").classList.add("text-bg-light")
}
