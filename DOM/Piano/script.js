let allKeys= []
let audio = new Audio('./tunes/tunes/a.wav');

const pianoKeys = document.querySelectorAll('.piano-keys .key');

function playTune(key){
     audio.pause();
     audio.currentTime = 0; 
    audio.src = `./tunes/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`.piano-keys .key[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(()=>{
        clickedKey.classList.remove('active');
    }, 200)

}

pianoKeys.forEach((key)=>{
    allKeys.push(key.dataset.key);
    key.addEventListener('click', ()=> playTune(key.dataset.key) )
});

document.addEventListener('keydown',(e)=>{
    if(allKeys.includes(e.key)) playTune(e.key)

})