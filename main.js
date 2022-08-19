
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

//currPic watches index of pic being displayed
let currPicIndex = 0; 
//grab the displayed img and the left right nav arrows
let currImage = document.getElementById('displayedImg');
const left = document.getElementById('left');
const right = document.getElementById('right');
const dots = document.getElementsByClassName('dot');
//add logic for listeners to allow navigation through the pictures
left.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = "white";
    if(currPicIndex == 0){
        
        currPicIndex = 5;
        currImage.setAttribute('src', pics[currPicIndex]);
        dots[currPicIndex].style.backgroundColor = "black";
    } else {
        currPicIndex-=1;
        currImage.setAttribute('src', pics[currPicIndex]);
        dots[currPicIndex].style.backgroundColor = "black";
    }
})

right.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = "white";
    if(currPicIndex == 5){
        currPicIndex = 0;
        currImage.setAttribute('src', pics[currPicIndex]);
        
    } else {
        currPicIndex+=1;
        currImage.setAttribute('src', pics[currPicIndex]);
    }
    dots[currPicIndex].style.backgroundColor = "black";
})

//grab each pic element that is shown on the bottom pic nav bar

const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');
const pic5 = document.getElementById('pic5');
const pic6 = document.getElementById('pic6');

//add event listeners to allow navigation to that specific picture
//change the currPicIndex and dot colors accordingly
pic1.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = 'white';
    currPicIndex = 0
    dots[currPicIndex].style.backgroundColor = 'black';
    currImage.setAttribute('src', './images/pic1.jpg');
})

pic2.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = 'white';
    currPicIndex = 1
    dots[currPicIndex].style.backgroundColor = 'black';
    currImage.setAttribute('src', './images/pic2.jpg');
})
pic3.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = 'white';
    currPicIndex = 2
    dots[currPicIndex].style.backgroundColor = 'black';
    currImage.setAttribute('src', './images/pic3.jpg');
})
pic4.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = 'white';
    currPicIndex = 3
    dots[currPicIndex].style.backgroundColor = 'black';
    currImage.setAttribute('src', './images/pic4.jpg');
})
pic5.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = 'white';
    currPicIndex = 4
    dots[currPicIndex].style.backgroundColor = 'black';
    currImage.setAttribute('src', './images/pic5.jpg');
})
pic6.addEventListener('click', ()=>{
    dots[currPicIndex].style.backgroundColor = 'white';
    currPicIndex = 5
    dots[currPicIndex].style.backgroundColor = 'black';
    currImage.setAttribute('src', './images/pic6.jpg');
})


