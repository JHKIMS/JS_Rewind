document.querySelector('.tab-button').addEventListener('click',function(){
    document.querySelectorAll('.tab-button').classList.remove('orange');
    document.querySelector('.tab-button')[0].classList.add("orange");
});