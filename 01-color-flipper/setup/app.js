const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function (){
    //get random number between 0 and 3
    
    const randomNumber = getRandomNumber(0,3);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}