const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function (){
    //get random number between 0 and 3
    
    const hexValue = generateHexCode();
    console.log(hexValue);
    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function generateHexCode(){
    let hexArray = ['#'];
    for(let i=0; i<6; i++){
        const random = getRandomNumber(0,15);
        hexArray.push(hex[random]);
    }
    return hexArray.join('');
}