let rated=document.querySelector(".rated");
let unrated=document.querySelector(".unrated");

rated.addEventListener('click',()=>{
   rated.style.color="rgb(6, 108, 191)";
   unrated.style.color="black"

})
unrated.addEventListener('click',()=>{
    unrated.style.color="rgb(6, 108, 191)";
    rated.style.color="black"

})