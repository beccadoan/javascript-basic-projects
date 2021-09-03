//using selectors inside the element
// traversing the dom


const questions = document.querySelectorAll(".question");


questions.forEach(function(question){
    console.log(question)
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        const isOn = question.classList.contains('show-text');
        questions.forEach(function(item){
            item.classList.remove("show-text");
        })
        if(!isOn){
            question.classList.add('show-text');
        }
        
    })
})




/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const question = e.currentTarget.parentElement.parentElement;
       question.classList.toggle('show-text');
    })
});
*/