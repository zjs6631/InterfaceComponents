
//I grab the first option by id that will always be visible
const main = document.getElementById("option1");
//use querySelector to grab all the options by class
const options = document.querySelectorAll('.menuOption');
//add listener that will change each of the options to display:grid
//using forEach
main.addEventListener('mouseover', ()=>{
    options.forEach(option => {
        option.style.display = "grid";
    })
})

//grab the div that contains the menu
const entireMenu = document.getElementById('dropdown');

//grab the elements by class
const menuElements = document.getElementsByClassName('menuOption');
//loop through the class and assign each to display:none
//start loop at 1 to ignore the option that will always be visible
entireMenu.addEventListener('mouseleave', ()=>{
    for(let i = 1; i < menuElements.length; i++){
        menuElements[i].style.display = "none";
    }
})

let pics = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/pic3.jpg", "./images/pic4.jpg", "./images/pic5.jpg", "./images/pic6.jpg"];

//let pictureElement = document.createElement('img');
//pictureElement.setAttribute('src', pics[0]);
//const picDiv = document.getElementById('currPicture');
//picDiv.appendChild(pictureElement);

let currPic = 0; 
let currImage = document.getElementById('displayedImg');
const left = document.getElementById('left');
const right = document.getElementById('right');
left.addEventListener('click', ()=>{
    if(currPic == 0){
        currPic = 5;
        currImage.setAttribute('src', pics[currPic]);
    } else {
        currPic-=1;
        currImage.setAttribute('src', pics[currPic]);
    }
})

right.addEventListener('click', ()=>{
    if(currPic == 5){
        currPic = 0;
        currImage.setAttribute('src', pics[currPic]);
    } else {
        currPic+=1;
        currImage.setAttribute('src', pics[currPic]);
    }
})


