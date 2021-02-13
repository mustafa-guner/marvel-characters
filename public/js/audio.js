
//Whole Site Music (Avengers Theme)
window.addEventListener("DOMContentLoaded", () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.003;//003
    audio.play();
});

//Selector of the logo containers
const card_containers = document.querySelectorAll(".card-container");
const charcter_sounds = document.querySelectorAll(".character-sounds");


//Playing every single mp3 voices on click

card_containers.forEach((element, index) => {
    let logos = element.childNodes[1].childNodes[1];
    //console.log(logos)
    logos.addEventListener("click", () => {
       stopSounds();
       charcter_sounds[index].play();
       charcter_sounds[index].volume = 0.03
    })
});

function stopSounds(){
   charcter_sounds.forEach((sound)=>{
        sound.currentTime = 0;
        sound.pause();
   });
}