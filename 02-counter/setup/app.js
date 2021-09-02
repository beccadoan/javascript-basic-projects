//set count to 0 and make buttons and count value a variable
let count = 0;
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const countValue = document.getElementById("value");

increaseBtn.addEventListener("click",function(){
    count++;
    updateCounter();
})

decreaseBtn.addEventListener("click",function(){
    count--;
    updateCounter();
})

resetBtn.addEventListener("click",function(){
    count = 0;
    updateCounter();
})


function updateCounter(){
    countValue.innerText = count;
    if (count > 0) {
        countValue.style.color = "green";
    } else if (count < 0) {
        countValue.style.color = "red";
    } else {
        countValue.style.color = "black";
    }
}