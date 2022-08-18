const main = document.getElementById("option1");
const options = document.querySelectorAll('.menuOption');
main.addEventListener('mouseover', ()=>{
    
    options.forEach(option => {
        option.style.display = "grid";
    })
})

const entireMenu = document.getElementById('dropdown');

const menuElements = document.getElementsByClassName('menuOption');
entireMenu.addEventListener('mouseleave', ()=>{
    for(let i = 1; i < menuElements.length; i++){
        menuElements[i].style.display = "none";
    }
})


