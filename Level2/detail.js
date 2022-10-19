let tab = document.querySelectorAll(".tab-button");

document.querySelector('.list').addEventListener('click', function(e){
    if(e.target === tab[0]){
        select(0);
    }else if(e.target === tab[1]){
        select(1);
    }else if(e.target === tab[2]){
        select(2);
    }
})

function select(tabNum) {
  document
    .querySelectorAll(".tab-button")
    [tabNum].addEventListener("click", function () {
      const orangeRemover = document.querySelectorAll(".tab-button");
      const showRemover = document.querySelectorAll(".tab-content");
      for (i = 0; i < orangeRemover.length; i++) {
        orangeRemover[i].classList.remove("orange");
      }
      for (i = 0; i < showRemover.length; i++) {
        showRemover[i].classList.remove("show");
      }
      document.querySelectorAll(".tab-button")[tabNum].classList.add("orange");
      document.querySelectorAll(".tab-content")[tabNum].classList.add("show");
    });
}
