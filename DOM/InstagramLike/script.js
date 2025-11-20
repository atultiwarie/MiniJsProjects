let card = document.querySelector('.card .img')
let likeIcon = document.querySelector('.icon i')
let likeCount = document.querySelector('.count')
let bigHeart = document.getElementById('big-heart');

let count =0;

let likeFun = ()=>{
    likeIcon.classList.toggle("ri-heart-3-fill");
    likeIcon.classList.toggle("ri-heart-3-line");

    if (likeIcon.classList.contains("ri-heart-3-fill")) {
      count++;
    } else {
      count--;
    }

    likeCount.textContent = `${count} Likes`;
}

likeIcon.addEventListener('click', likeFun)

card.addEventListener('dblclick',()=>{
    if(!likeIcon.classList.contains('ri-heart-3-fill')){
        likeFun()
    }
    bigHeart.classList.add('active')

    setTimeout(()=>{
        bigHeart.classList.remove('active')
    }, 700)
  
})