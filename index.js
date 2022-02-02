const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const navLink = document.querySelectorAll('.nav-link')
const navItems = document.querySelector('.nav-items')
const hero = document.querySelector('.hero')
let isPlay = false;
// let birds = ['drozd', 'javoronok', 'slavka', 'solovey', 'zarynka']

let bird = 'drozd'
let pahtBird = ''

const drozd = document.querySelector('.drozd')
const zhav = document.querySelector('.zhav')
const slavka = document.querySelector('.slavka')
const solovey = document.querySelector('.solovey')
const zarynka = document.querySelector('.zarynka')

function drozdGet () {
bird = 'drozd'
audio.currentTime = 0;
audio.src = `assets/audio/${bird}.mp3`
audio.play();
isPlay = true;
play.style.backgroundImage = 'url(assets/svg/pause.svg)'
console.log(`assets/audio/${bird}.mp3`)
hero.style.backgroundImage = 'url(assets/img/drozd.jpg)'
}

function zhavGet () {
bird = 'javoronok'
audio.currentTime = 0;
audio.src = `assets/audio/${bird}.mp3`
isPlay = true;
audio.play();
play.style.backgroundImage = 'url(assets/svg/pause.svg)'
hero.style.backgroundImage = 'url(assets/img/javoronok.jpg)'
}

function slavkaGet () {
bird = 'slavka'
audio.currentTime = 0;
audio.src = `assets/audio/${bird}.mp3`
isPlay = true;
audio.play();
play.style.backgroundImage = 'url(assets/svg/pause.svg)'
hero.style.backgroundImage = 'url(assets/img/slavka.jpg)'
}

function soloveyGet () {
bird = 'solovey'
audio.currentTime = 0;
audio.src = `assets/audio/${bird}.mp3`
isPlay = true;
audio.play();
play.style.backgroundImage = 'url(assets/svg/pause.svg)'
hero.style.backgroundImage = 'url(assets/img/solovey.jpg)'
}

function zarynkaGet () {
bird = 'zarynka'
audio.currentTime = 0;
audio.src = `assets/audio/${bird}.mp3`
isPlay = true;
audio.play();
play.style.backgroundImage = 'url(assets/svg/pause.svg)'
hero.style.backgroundImage = 'url(assets/img/zarynka.jpg)'
}


drozd.addEventListener('click', drozdGet)  
zhav.addEventListener('click', zhavGet)  
slavka.addEventListener('click', slavkaGet) 
solovey.addEventListener('click', soloveyGet)  
zarynka.addEventListener('click', zarynkaGet) 


let getSrc = (bird) => {
    return `assets/audio/${bird}.mp3`
}


// PLAY BUTTON //

function playAudio() {
  audio.currentTime = 0;
audio.src = `assets/audio/${bird}.mp3`
if(isPlay === false) {
    audio.play();
    console.log(`assets/audio/${bird}.mp3`)
    
    isPlay = true;
    play.style.backgroundImage = 'url(assets/svg/pause.svg)'
}
else {
    audio.pause();
    isPlay = false
    play.style.backgroundImage = 'url(assets/svg/play.svg)'    
}

}


play.addEventListener('click', playAudio)


// ADD ACTIVE TO NAV-LINKS //

function changeClassActive(event) {

  if (event.target.classList.contains('nav-link')) {

    navLink.forEach((e,idx) => {
        e.classList.remove('active');

    })

    event.target.classList.add('active')
  }
 
};


navItems.addEventListener('click', changeClassActive);




// navLink[0].addEventListener('click', playNavLink)


// function playNavLink (event){
    
//     if (event.target.classList.contains('nav-link')) {

//     return console.log(event.target.innerHTML);
//   }

// }
