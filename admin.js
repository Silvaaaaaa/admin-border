let list = document.querySelectorAll(".navigation li");

function checklink(){
    list.forEach(item =>{
        item.classList.remove("hovered")
    })
    this.classList.add("hovered");
} 
list.forEach(item =>{{
    item.addEventListener("mouseover" , checklink);
}})

// menue toggle **************
let togglee = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

togglee.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

  