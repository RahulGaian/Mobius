
ul_ele = document.getElementById("nav-clicky")

let underliner = () => {
    remover();
    event.target.classList.add("under")
}
let remover =  () => {
    
    for(let i of ul_ele.children){
        i.children[0].classList.remove("under")

    }
}

