//*****************Sans VISUAL******** ******** */

let sansArt = document.getElementById('sans');

sansArt.onmouseover = function(){
    sansArt.classList.add('leftEyeWink');
}
sansArt.onmouseleave = function(){
    sansArt.classList.remove('leftEyeWink');
}

//***************TYPEWRITER & PUNS******************** */

function randomPun(list){
    let pun = list[Math.floor(Math.random()*list.length)];
    document.getElementById("text").innerHTML=''
    letterI = 0;
    txt = pun;
    typeWriter();
}



let letterI = 0;
let speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (letterI < txt.length) {
      if(txt.charAt(letterI) !== ' ' && soundOn === true){
        let audio = new Audio('sound/voice_sans.mp3');
        console.log()
        audio.play();
      }
   
    document.getElementById("text").innerHTML += txt.charAt(letterI);
    letterI++;
    setTimeout(typeWriter, speed);
  }
}
//**************Sound hanlder****************** */

let soundBut = document.getElementById('sound');
let soundOn = true;

soundBut.onclick = toggleSound;

function toggleSound(){
    if(soundBut.innerHTML == 'Sound:on'){
        soundBut.innerHTML = 'Sound:off';
        soundOn = false;
    }else{
        soundBut.innerHTML = 'Sound:on';
        soundOn = true;
    }
}